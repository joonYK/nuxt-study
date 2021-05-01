<template>
	<section class="post-list">
		<PostPreview 
			id="1" 
			:is-admin="isAdmin" 
			title="Hello there!" 
			previewText="This my first post!" 
			:thumbnail="require('~/assets/images/img.jpeg')"/>
		<PostPreview 
			id="2" 
			:is-admin="isAdmin" 
			title="Hello there!" 
			previewText="This my second post!" 
			:thumbnail="require('~/assets/images/img.jpeg')"/>
		<PostPreview 
			id="3" 
			:is-admin="isAdmin" 
			title="Hello there!" 
			previewText="This my third post!" 
			:thumbnail="require('~/assets/images/img.jpeg')"/>
	</section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
	name: 'PostList',
    components: {
        PostPreview
    },
	props: {
		isAdmin : {
			type: Boolean,
			default: false
		}
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