<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
              v-model="comment"
              :prepend-icon="icon"
              color="blue darken-2"
              filled
              append-icon="mdi-send"
              clear-icon="mdi-close-circle"
              clearable
              label="Write a comment..."
              type="text"
              @click:append="submitComment"
              @click:prepend="changeIcon"
              @click:clear="clearComment"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    comment: '',
    iconIndex: 0,
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue',
    ],
  }),
  computed: {
    icon () {
      return this.icons[this.iconIndex]
    },
  },
  methods: {
    submitComment () {
      this.$emit('add-comment', this.comment);
      this.resetIcon()
      this.clearComment()
    },
    clearComment () {
      this.comment = ''
    },
    resetIcon () {
      this.iconIndex = 0
    },
    changeIcon () {
      this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
    },
  },
}
</script>

<style></style>