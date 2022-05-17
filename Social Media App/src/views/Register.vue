<template>
  <v-container fluid>
    <v-form ref="form" lazy-validation>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-img
            class="text-center"
            max-height="150"
            src="../assets/logo.png"
          ></v-img>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Username"
            v-model="username"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Full Name"
            v-model="fullName"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Confirm Password"
            v-model="confirmPassword"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-btn color="cyan" block xlarge @click="register"> Register </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { uuid } from 'vue-uuid';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    async register() {
      if(this.password.toString() !== this.confirmPassword.toString()) {
        alert("Password does not match.");
        console.log(this.password);
        console.log(this.confirmPassword);
      } else {
        const res = await fetch('http://localhost:5000/accounts');
        const accounts = await res.json();
        let userNameExist = false;
        accounts.forEach((acc) => {
          if(acc.username == this.username) {
            userNameExist = true;
          }
        });
        if(userNameExist == true) {
          alert("Username already exists");
        } else {
          const newAcc = {
            id: uuid.v4(),
            username: this.username,
            password: this.password,
            fullName: this.fullName,
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
          }

          const res = await fetch(`http://localhost:5000/accounts`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(newAcc),
          });
          alert("Registration successful");
          this.$router.push({ name: 'Login' });
        }
      }
    }
  }
};
</script>

<style>
</style>