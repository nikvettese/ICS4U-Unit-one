<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import BottomNav from "@/components/layouts/BottomNav";
export default {
  name: 'App',
  components: {
    BottomNav,
    Header,
    Footer
  },
  data: () => ({
  }),
}
</script>