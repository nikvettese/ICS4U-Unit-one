<template>
  <v-container>
    <v-btn rounded color="grey lighten-5" @click="$router.back()">Go back</v-btn>
    <Post class="mt-5" :postData="postData" v-bind:is-post-detail="true"
          @submitLike="submitLike( postData.id)"
          @getUpdatedPost="getUpdatedPost"/>
  </v-container>
</template>

<script>
import Post from "@/components/post/Post";
export default {
  name: 'PostDetail',
  components: {
    Post
  },
  computed:{
    loggingInUserId(){
      return JSON.parse(localStorage.getItem('auth')).userId.toString();
    }
  },
  data() {
    return {
      postData: {
        id: '',
        owner: {
          id: '',
          avatar: '',
          name: ''
        },
        message: '',
        createdAt: new Date().toISOString(),
        comments: [],
        likes: []
      }
    }
  },
  methods: {
    async fetchPost(){
      const res = await fetch(`http://localhost:5000/posts/${this.$route.params.id}`);
      return res.json();
    },
    async submitLike(postId){
      let updatedLikes = this.postData.likes;
      const isLiked = this.postData.likes.includes(this.loggingInUserId);
      if(isLiked){
        updatedLikes = updatedLikes.filter(uid => uid != this.loggingInUserId);
      }else {
        updatedLikes.push(this.loggingInUserId.toString());
      }
      const toBeUpdatedPost = { ...this.postData, likes: updatedLikes }
      const res = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(toBeUpdatedPost),
      });
      const data = await res.json()
      this.postData = data;
    },
    getUpdatedPost(post){
      this.postData = post;
    }
  },
  async created(){
    this.postData = await this.fetchPost();
  }
}
</script>