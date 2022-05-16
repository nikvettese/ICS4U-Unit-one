<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
              v-model="post"
              color="blue darken-2"
              filled
              append-icon="mdi-send"
              clear-icon="mdi-close-circle"
              clearable
              label="What's on your mind?"
              type="text"
              @click:append="submitPost"
              @click:clear="clearPost"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    post: ''
  }),
  computed: {
  },
  methods: {
    submitPost () {
      this.$emit('add-post', this.post);
      this.clearPost()
    },
    clearPost () {
      this.post = ''
    },
  },
}
</script>

<style></style>