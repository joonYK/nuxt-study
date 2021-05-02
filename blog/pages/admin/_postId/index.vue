<template>
	<div class="admin-post-page">
		<section class="update-form">
			<admin-post-form :post="loadedPost"/>
		</section>
	</div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
	layout: 'admin',
	components: {
		AdminPostForm 
	},
	data() {
		return {
			loadedPost: {
				author: 'joonyeop',
				title: 'My awesome Post',
				content: 'Super amazing, thanks for that',
				thumbnailLink: '~assets/images/img.jpeg'
			}
		}
	}
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