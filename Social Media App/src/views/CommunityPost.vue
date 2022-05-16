<template>
  <v-container fluid>
    <v-btn rounded color="grey lighten-5" @click="$router.back()">Go back</v-btn>
    <h1>{{ community.name }}</h1>
    <AddPost @addPost="addPost"></AddPost>
    <div v-if="posts.length > 0">
      <Posts :posts="sortedPostByDateDesc"
             @submitLike="submitLike"
             @getUpdatedPost="getUpdatedPost"/>
    </div>
    <div v-if="posts.length == 0">
      <p class="text-grey font-weight-light">There is no post at the moment.</p>
    </div>
  </v-container>
</template>

<script>
import Posts from "@/components/post/Posts";
import AddPost from "@/components/post/AddPost";
import {uuid} from "vue-uuid";
export default {
  name: 'CommunityPost',
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
      community: Object,
      posts: []
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
      const communityId = this.$route.params.id;
      const newPost = {
        id: postId,
        owner: postOwner,
        communityId: communityId,
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
      const res = await fetch(`http://localhost:5000/posts/${postId}`, {
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
    },
    getUpdatedPost(post){
      this.posts = this.posts.map((p) =>
          p.id === post.Id ? post : p
      );
    },
  },
  async created() {
    const communityId = this.$route.params.id;
    // Get the selected community
    const communitiesRes = await fetch(`http://localhost:5000/communities`);
    const communities = await communitiesRes.json();
    this.community = communities.find(c => c.id == communityId);
    // Get posts belong to the selected community
    const res = await fetch(`http://localhost:5000/posts`);
    const allPosts = await res.json();
    this.posts = allPosts.filter(p => p.communityId != null && p.communityId == communityId);
  }
}

</script>