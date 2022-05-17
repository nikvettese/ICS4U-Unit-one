<template>
  <h3>Version 1.0.0</h3>
  <v-btn rounded color="error" @click="logout">
    Logout
  </v-btn>
</template>

<script>
export default {
  name: 'Menu',
  methods:{
    logout(){
      localStorage.removeItem('auth');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style>
</style>