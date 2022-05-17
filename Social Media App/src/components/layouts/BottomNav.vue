<template>
  <v-bottom-navigation v-show="!isLoginPage && !isRegisterPage"
      v-model="value"
      color="blue lighten-2"
      horizontal
  >
    <v-btn value="home" @click="navigate">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn value="communities" @click="navigate">
      <span>Communities</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn value="menu" @click="navigate">
      <span>Menu</span>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
//btw the bottomNav only shows if logged in (line 2)
export default {
  data: () => ({ value: '' }),
  beforeMount(){
    this.value = this.getCurrentPage();
  },
  computed:{
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
  methods:{
    getCurrentPage(){
      const currentPage = window.location.pathname;
      if(currentPage == '/')
        return 'home';
      if(currentPage.startsWith('/communities'))
        return 'communities';
      return 'menu';
    },
    navigate(){
      switch(this.value){
        case 'home':
          this.$router.push({ name: 'Home' });
          break;
        case 'communities':
          this.$router.push({ name: 'CommunityList' });
          break;
        case 'menu':
          this.$router.push({ name: 'Menu' });
          break;
      }
    }
  }
}
</script>

<style scoped>
</style>