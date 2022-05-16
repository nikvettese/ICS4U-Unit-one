<template>
  <div v-if="posts != null" v-for="post in posts">
    <v-container>
      <v-row dense>
        <Post :postData="post" v-bind:is-post-detail="false" @submitLike="$emit('submit-like', post.id)"
              @addComment="EmitAddComment"
              @getUpdatedPost="EmitGetUpdatedPost"/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Post from "@/components/post/Post";
export default {
  components:{
    Post
  },
  props:{
    posts: []
  },
  methods:{
    EmitAddComment(comment){
      this.$emit('add-comment', comment)
    },
    EmitGetUpdatedPost(post){
      this.$emit('get-updated-post', post)
    }
  },
  emits: ['submit-like', 'add-comment', 'get-updated-post'],
}
</script>

<style></style>