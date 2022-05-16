<template>
  <v-card elevation="2" outlined shaped width="100%">
    <v-list-item>
      <v-row>
        <v-col cols="2">
          <Avatar :userId="owner.id" :avatar="owner.avatar" avatar-size="25px"></Avatar>
        </v-col>
        <v-col cols="10">
          <v-row>
            <v-col>
              <p class="font-weight-black">
                {{owner.name}}
              </p>
            </v-col>
            <v-col>
              <p class="text-right">{{postTime}}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>{{message}}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-list-item>
  </v-card>
</template>

<script>

import Avatar from "@/components/layouts/Avatar";
export default {
  components:{
    Avatar
  },
  props:{
    owner: Object,
    message: String,
    createdAt: String
  },
  computed:{
    postTime(){
      const cur = new Date();
      const createdAt = new Date(this.createdAt);
      const secsDif = (cur.getTime() - createdAt.getTime()) / 1000;
      const minsDif = Math.floor(secsDif / 60);
      if(minsDif < 60){
        return `${minsDif} m`;
      }
      const hoursDif = Math.floor(minsDif / 60);
      if(hoursDif < 24){
        return `${hoursDif}h`;
      }
      const daysDif = Math.floor(hoursDif / 24);
      if(daysDif < 30){
        return `${daysDif}d`;
      }
      return createdAt.toLocaleDateString('en-US')
    }
  }
}
</script>

<style></style>