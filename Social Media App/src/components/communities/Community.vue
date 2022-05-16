<template>
  <v-row align="center">
    <v-col cols="2">
      <v-list-item-avatar>
        <v-img :src="image"></v-img>
      </v-list-item-avatar>
    </v-col>
    <v-col cols="7">
      <v-list-item-content>
        <v-list-item-title>{{name}}</v-list-item-title>
        <v-list-item-subtitle>{{description}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-col>
    <v-col cols="3">
      <v-list-item-action>
        <v-btn class="ma-2" variant="outlined" x-small rounded color="blue lighten-2"
               @click="$emit('join-community', id)">{{ isJoined ? 'View' : 'Join' }}</v-btn>
      </v-list-item-action>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Community',
  props: {
    id: String,
    name: String,
    description: String,
    image: String,
    members: []
  },
  computed:{
    loggingInUserId(){
      return JSON.parse(localStorage.getItem('auth')).userId.toString();
    },
    isJoined(){
      return this.members.includes(this.loggingInUserId);
    }
  },
  methods:{
  }
};
</script>

<style>
</style>
