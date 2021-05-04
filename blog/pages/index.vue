<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest tech news!</h1>
        </section>
        <post-list :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
import PostList from '../components/Posts/PostList.vue'

export default {
    components: {
        PostPreview,
        PostList
    },
    asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
                loadedPosts : [
                    {
                        id : "1",
                        title : "First Post!",
                        previewText : "This my first post!",
                        thumbnail : require('~/assets/images/img.jpeg')
                    },
                    {
                        id : "2",
                        title : "Second Post!",
                        previewText : "This my second post!",
                        thumbnail : require('~/assets/images/img.jpeg')
                    },
                    {
                        id : "3",
                        title : "Third Post!",
                        previewText : "This my third post!",
                        thumbnail : require('~/assets/images/img.jpeg')
                    }
                ]
            });
        }, 1500);
    },
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-image.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>