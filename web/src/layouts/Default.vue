<template>
<div>
<div>
   
    
    
  </div>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
     <navbar-component></navbar-component>
    

    <div class="flex-grow">
      <slot/>
    </div>
    
<footer-component></footer-component>
    
  </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "home-page",
  components: {
    SearchInput,
    ThemeSwitcher,
    NavbarComponent,
    FooterComponent
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      isOpen: false,
      theme: '',
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>

<style src="../main.css" />
