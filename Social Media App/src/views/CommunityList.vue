<template>
  <v-container>
    <h1>Communities</h1>
    <Communities :communities="communities" @joinCommunity="joinCommunity"/>
  </v-container>
</template>

<script>
import Communities from "@/components/communities/Communities";
export default {
  name: 'Community',
  components:{
    Communities
  },
  props: {
  },
  data: () => ({
    communities: [],
  }),
  computed:{
    loggingInUserId(){
      return JSON.parse(localStorage.getItem('auth')).userId.toString();
    }
  },
  methods:{
    //join the community
    async joinCommunity(id){
      const community = this.communities.find(c => c.id == id);
      let updatedMembers = community.members;
      const isMember = community.members.includes(this.loggingInUserId);
      //brings user to community post if new member
      if(isMember){
        this.$router.push({name: 'CommunityPost', params: {id: id}});
      }else {
        updatedMembers.push(this.loggingInUserId.toString());
      }
      //updates the community members - community inherited
      const toBeUpdatedCommunity = { ...community, members: updatedMembers }
      //Submit to server
      const res = await fetch(`api/communities/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(toBeUpdatedCommunity),
      });
      //update app
      const data = await res.json()
      this.communities = this.communities.map((c) =>
          c.id === id ? { ...community, members: data.members } : c
      );
    }
  },
  async created(){
    const res = await fetch('api/communities');
    this.communities = await res.json();
  }
};
</script>

<style>
</style>