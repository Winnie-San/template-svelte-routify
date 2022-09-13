import preprocess from 'svelte-preprocess'

const config = {
  vitePlugin: {
    disableDependencyReinclusion: ['@roxi/routify']
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
