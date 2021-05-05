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
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>