<template>
  <v-avatar :size="avatarSize">
    <v-img alt="Avatar" :src="avatar"/>
  </v-avatar>
</template>

<script>
export default {
  props:{
    avatar: String,
    avatarSize: String
  }
}
</script>

<style></style>