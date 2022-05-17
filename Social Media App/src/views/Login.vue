<template>
  <v-container fluid>
    <v-form ref="form" lazy-validation>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-img class="text-center"
            max-height="150"
            src="../assets/logo.png"
          ></v-img>
        </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-text-field
              label="Username"
              v-model="username"
              required
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              required
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-btn
              color="success"
              block
              xlarge
              @click="login">
              Login
            </v-btn>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-btn
              color="cyan"
              block
              xlarge
              @click="register">
              Register
            </v-btn>
          </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(){
      const res = await fetch('api/accounts');
      let isAuthenticated = false;
      let authUser = null;
      const accounts = await res.json();
      accounts.forEach(acc => {
        if(acc.username == this.username && acc.password == this.password){
          isAuthenticated = true;
          authUser = acc;
          localStorage.setItem('auth', JSON.stringify({'username': acc.username, 'userId': acc.id, 'fullName': acc.fullName, 'avatar': acc.avatar}))
        }
      });
      if(isAuthenticated){
        this.$router.push({ name: 'Home' });
      }else{
        alert('Wrong username/password');
      }
    },
    register(){
      this.$router.push({ name: 'Register' });
    }
  }
};
</script>

<style>
</style>