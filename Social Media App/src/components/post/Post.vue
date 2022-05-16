<template>
    <v-card elevation="10" shaped class="mx-auto" width="100%">
      <v-container fluid>
        <v-card-title>
          <Avatar :avatar="postData.owner.avatar" avatar-size="25px"></Avatar>
          <strong class="ml-3" v-html="postData.owner.name"></strong>
          <v-card-text class="text-right">{{postTime}}</v-card-text>
        </v-card-title>
        <v-card-text class="text-h5 font-weight-bold">
          {{postData.message }}
        </v-card-text>
        <div class="mt-3 mb-3" v-if="postData.comments != null"  v-for="comment in (isPostDetail ? sortedCommentsByDateAsc : top3Comments)">
          <Comment :owner="comment.owner" :message="comment.message" :createdAt="comment.createdAt" ></Comment>
        </div>
        <div class="text-right mt-4 mb-4" v-if="postData.comments.length > 3 && !isPostDetail">
          <v-btn rounded outlined color="indigo lighten-4" class="ma-2"  @click="viewPostDetail(postData.id)">View more</v-btn>
        </div>
        <v-list-item>
          <v-row align="center" justify="end">
            <v-icon color="blue lighten-2" v-if="isLiked" class="mr-1" @click="$emit('submit-like', postData.id)">mdi-thumb-up</v-icon>
            <v-icon color="blue lighten-2" v-if="!isLiked" class="mr-1" @click="$emit('submit-like', postData.id)" >mdi-thumb-up-outline</v-icon>
            <span class="subheading mr-2">{{numLikes}}</span>
            <span class="mr-1">·</span>
            <v-icon v-if="numComments > 0" color="blue lighten-2" class="mr-1">mdi-comment</v-icon>
            <v-icon v-if="numComments == 0" color="blue lighten-2" class="mr-1">mdi-comment-outline</v-icon>
            <span class="subheading">{{ numComments }}</span>
          </v-row>
        </v-list-item>
        <div>
          <AddComment @addComment="addComment"></AddComment>
        </div>
      </v-container>
    </v-card>
</template>

<script>
import { uuid } from 'vue-uuid';
import Avatar from "@/components/layouts/Avatar";
import Comment from "@/components/comments/Comment";
import AddComment from "@/components/comments/AddComment";
export default {
  components:{
    AddComment,
    Avatar,
    Comment
  },
  data(){
    return {
      inputComment: ''
    };
  },
  props:{
    postData: Object,
    isPostDetail: Boolean
  },
  computed:{
    isLiked(){
      return this.postData.likes.includes(this.loggingInUserId);
    },
    numLikes(){
      return this.postData.likes.length;
    },
    numComments(){
      return this.postData.comments.length;
    },
    loggingInUserId(){
      return JSON.parse(localStorage.getItem('auth')).userId.toString();
    },
    loggingInUser(){
      return JSON.parse(localStorage.getItem('auth'));
    },
    postTime(){
      const cur = new Date();
      const createdAt = new Date(this.postData.createdAt);
      const secsDif = (cur.getTime() - createdAt.getTime()) / 1000;
      const minsDif = Math.floor(secsDif / 60);
      if(minsDif < 60){
        return `${minsDif} min(s) ago`;
      }
      const hoursDif = Math.floor(minsDif / 60);
      if(hoursDif < 24){
        return `${hoursDif} hour(s) ago`;
      }
      const daysDif = Math.floor(hoursDif / 24);
      if(daysDif < 30){
        return `${daysDif} day(s) ago`;
      }
      const monthDif = Math.floor(daysDif / 30);
      if(monthDif < 12){
        return `${monthDif} month(s) ago`;
      }
      const yearsDif = Math.floor(monthDif / 12);
      return `${yearsDif} year(s) ago`;
    },
    top3Comments(){
      if(this.postData.comments.length > 3){
        return this.sortedCommentsByDateDesc.slice(0,3);
      }
      return this.postData.comments;
    },
    sortedCommentsByDateAsc(){
      return this.postData.comments.sort((cm1, cm2) =>
      { return new Date(cm1.createdAt).getTime() - new Date(cm2.createdAt).getTime()});
    },
    sortedCommentsByDateDesc(){
      return this.postData.comments.sort((cm1, cm2) =>
      { return new Date(cm2.createdAt).getTime() - new Date(cm1.createdAt).getTime()});
    }
  },
  methods:{
    viewPostDetail(postId){
      this.$router.push({name:'PostDetails', params:{id: postId}})
    },
    // This will add the comment to the post and return the updated post
    async addComment(comment){
      if(comment == null || comment.length == 0){
        alert(`What's the comment?`);
        return;
      }
      const postId = this.postData.id;
      const commentOwner = {
        "id": this.loggingInUser.userId.toString(),
        "avatar": this.loggingInUser.avatar.toString(),
        "name": this.loggingInUser.fullName.toString()
      };
      const commentId = uuid.v4();
      const newComment = {
        id: commentId,
        owner: commentOwner,
        createdAt: new Date().toISOString(),
        message: comment
      };
      // Add comment to the post
      let updatedComments = this.postData.comments;
      updatedComments.push(newComment);
      const toBeUpdatedPost = { ...this.postData, comments: updatedComments }
      const res = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(toBeUpdatedPost),
      });
      const data = await res.json()
      this.$emit('get-updated-post', data)
      return data;
    }
  },
  emits: ['add-comment']
}
</script>

<style></style>