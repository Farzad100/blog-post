import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
        },
        mutations: {
            setPosts(state, post) {
                state.loadedPosts = post
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                    vuexContext.commit('setPosts', [
                        {
                          id: '1',
                          title: 'My first Post',
                          previewText: 'Super Post 1, Thanks for That',
                          thumbnail: '/_nuxt/assets/images/download.jpg',
                        },
                        {
                          id: '2',
                          title: 'My second Post',
                          previewText: 'Super Post 2, Thanks for That',
                          thumbnail: '/_nuxt/assets/images/download.jpg',
                        },
                        {
                          id: '3',
                          title: 'My third Post',
                          previewText: 'Super Post 3, Thanks for That',
                          thumbnail: '/_nuxt/assets/images/download.jpg',
                        },
                     ])
                    resolve();
                  }, 1500)})
            },
            setPosts(vuexContext, post) {
                vuexContext.commit('setPosts', post)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        },
    })
}

export default createStore