<template>
 <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/SiteHeader.vue'
import Footer from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>