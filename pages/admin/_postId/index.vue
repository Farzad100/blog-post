<template>
  <div class="admin-post-page">
    <section class="update-form">
        <AdminPostForm  :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    layout: 'admin',
    data() {
        return {
            // loadedPost: {
            //     author: 'Farzad Farajolahi',
            //     title: 'My Post',
            //     thumbnailLink: '/_nuxt/assets/images/download.jpg' ,
            //     content: 'Super Post, Thanks for That',
            // }
            loadedPost: {},
        }
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
      // ...mapState(['loadedPosts'])
    },
    created() {
      this.loadedPosts.forEach(loadedPost => {
        if(loadedPost.id === this.$route.params.postId) {
          this.loadedPost = loadedPost;
        }
      });
    },
}   
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>