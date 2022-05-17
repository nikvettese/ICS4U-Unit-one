<template>
  <v-app-bar v-show="!isLoginPage && !isRegisterPage" color="indigo lighten-1 accent-4" dense dark>
    <v-row align="center">
      <v-col cols="2" class="float-left">
        <v-img class="text-center"
             src="../../assets/logo.png"></v-img>
      </v-col>
      <v-col cols="4">
        <v-toolbar-title class="font-weight-bold">{{title}}</v-toolbar-title>
      </v-col>
      <v-col cols="6" class="float-right">
        <v-container fluid>
          <v-row justify="center">
            <v-row align="center" style="justify-content: end" class="d-flex" no-gutters>
              <Avatar class="text-right" :avatar="userAvatar" avatar-size="36px"></Avatar>
              <strong class="ml-3" v-html="userFullName"></strong>
            </v-row>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import Avatar from "@/components/layouts/Avatar";
export default {
  name: 'Header',
  data: () => {
    return {
      title: 'Social Media',
      userFullName: localStorage.getItem('auth') != null ? JSON.parse(localStorage.getItem('auth')).fullName : '',
      userAvatar: localStorage.getItem('auth') != null ? JSON.parse(localStorage.getItem('auth')).avatar : ''
    }
  },
  components: {
    Avatar
  },
  computed: {
    isLoginPage() {
      if (this.$route.path === '/login')
        return true;
      return false;
    },
    isRegisterPage() {
      if (this.$route.path === '/register')
        return true;
      return false;
    }
  },
}
</script>

<style scoped>
</style>