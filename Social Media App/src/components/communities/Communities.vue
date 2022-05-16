<template>
    <v-list three-line>
      <template v-for="community in communities">
        <v-list-item>
          <Community :id="community.id" :name="community.name" :description="community.description"
                     :image="community.image" :members="community.members"
                     @joinCommunity="$emit('join-community', community.id)"/>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-list>
</template>

<script>
import Community from "@/components/communities/Community";
export default {
  name: 'Communities',
  components: {Community},
  props: {
    communities: []
  },
  emits: ['join-community'],
};
</script>

<style>
</style>