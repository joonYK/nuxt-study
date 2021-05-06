<template>
    <div class="posts-page">
        <post-list :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    components: {
        PostList
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
            resolve(
                {
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
                }
            );
        });
    },
    created() {
        this.$store.dispatch('setPosts', this.loadedPosts);
        console.log(this.$store.getters.loadedPosts);
    }
}
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>