<template>
  <form @submit.prevent="onSave">
        <UIAppControlInput v-model="editedPost.author">Author Name</UIAppControlInput>
        <UIAppControlInput v-model="editedPost.title">Title</UIAppControlInput>
        <UIAppControlInput v-model="editedPost.thumbnail">Thumbnail Link</UIAppControlInput>
        <UIAppControlInput
          control-type="textarea"
          v-model="editedPost.previewText">Content</UIAppControlInput>
        <UIAppButton type="submit">Save</UIAppButton>
        <UIAppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel">Cancel</UIAppButton>
      </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      editedPost: this.post 
      ? { ...this.post } 
      : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: '',
      }
    }
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    }
  }
}
</script>

<style>

</style>