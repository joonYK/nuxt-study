import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedPosts: []
		},
		mutations: {
			setPosts(state, posts) {
				state.loadedPosts = posts
			}
		},
		actions: {
			nuxtServerInit(vuexContext, context) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						vuexContext.commit('setPosts', [
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
						]);
						resolve();
					}, 1000);
				})
			},
			setPosts(vuexContext, posts) {
				vuexContext.commit('setPosts', posts);			}
		},
		getters: {
			loadedPosts(state) {
				return state.loadedPosts;
			}
		}
	})	
};

export default createStore;  