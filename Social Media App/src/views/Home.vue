<template>
  <v-container>
    <h1>Home</h1>
    <AddPost @addPost="addPost"></AddPost>
    <Posts :posts="sortedPostByDateDesc"
           @submitLike="submitLike"
           @getUpdatedPost="getUpdatedPost"
    />
  </v-container>

</template>

<script>
import { uuid } from 'vue-uuid';
import Posts from "@/components/post/Posts";
import AddPost from "@/components/post/AddPost";
export default {
  name: 'Home',
  components: {
    Posts,
    AddPost
  },
  computed:{
    loggingInUser(){
      return JSON.parse(localStorage.getItem('auth'));
    },
    loggingInUserId(){
      return JSON.parse(localStorage.getItem('auth')).userId.toString();
    },
    sortedPostByDateDesc(){
      return this.posts.sort((p1, p2) =>
      { return new Date(p2.createdAt).getTime() - new Date(p1.createdAt).getTime()});
    }
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async addPost(postMessage){
      if(postMessage == null || postMessage.length == 0){
        alert(`What's the post message?`);
        return;
      }
      const postOwner = {
        "id": this.loggingInUser.userId.toString(),
        "avatar": this.loggingInUser.avatar.toString(),
        "name": this.loggingInUser.fullName.toString()
      };
      const postId = uuid.v4();
      const newPost = {
        id: postId,
        owner: postOwner,
        createdAt: new Date().toISOString(),
        message: postMessage,
        comments: [],
        likes: []
      };
      // Submit new post to server
      const res = await fetch(`http://localhost:5000/posts`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      const createdPost = await res.json()
      this.posts = [...this.posts, createdPost]
    },
    getUpdatedPost(post){
      this.posts = this.posts.map((p) =>
          p.id === post.Id ? post : p
      );
    },
    async submitLike(postId){
      const post = this.posts.find(p => p.id == postId);
      let updatedLikes = post.likes;
      const isLiked = post.likes.includes(this.loggingInUserId);
      if(isLiked){
        updatedLikes = updatedLikes.filter(uid => uid != this.loggingInUserId);
      }else {
        updatedLikes.push(this.loggingInUserId.toString());
      }
      const toBeUpdatedPost = { ...post, likes: updatedLikes }
      const res = await fetch(`api/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(toBeUpdatedPost),
      });
      const data = await res.json()
      this.posts = this.posts.map((post) =>
          post.id === postId ? { ...post, likes: data.likes } : post
      );
    }
  },
  async created() {
    const res = await fetch('api/posts');
    this.posts = await res.json();
  }
}
</script>