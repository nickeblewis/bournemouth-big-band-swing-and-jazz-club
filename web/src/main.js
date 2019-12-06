// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
// Import image url builder
import urlForImage from './utils/urlForImage'
import VueYoutube from 'vue-youtube'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
// Inject global image URL builder
Vue.prototype.$urlForImage = urlForImage
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Bournemouth,Jazz,Big Band,Music,Club'
  })

  head.meta.push({
    name: 'description',
    content: 'Bournemouth Swing and Big Band Jazz Club'
  })

  head.meta.push({
    name: 'author',
    content: 'Nick Lewis'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}


