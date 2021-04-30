<template>
	<section class="post-list">
		<PostPreview id="1" title="Hello there!" previewText="This my first post!" :thumbnail="require('~/assets/images/img.jpeg')"/>
		<PostPreview id="2" title="Hello there!" previewText="This my second post!" :thumbnail="require('~/assets/images/img.jpeg')"/>
		<PostPreview id="3" title="Hello there!" previewText="This my third post!" :thumbnail="require('~/assets/images/img.jpeg')"/>
	</section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
	name: 'PostList',
    components: {
        PostPreview
    }

}
</script>

<style scoped>
    .post-list {
		display: flex;
		padding: 20px;
		box-sizing: border-box;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
    }
</style>