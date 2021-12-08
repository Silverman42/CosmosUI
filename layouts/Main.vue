<template>
  <div class="body">
    <div class="foreground"></div>
    <div class="wrapper">
      <nav class="navbar">
        <a href="#" class="navbar-left">
          <img src="/logo.svg" alt="cosmos logo" />
        </a>
        <ul class="navlink">
          <li class="slideUp" style="animation-delay: 0.1s">
            <a href="#">Learn</a>
          </li>
          <li class="slideUp" style="animation-delay: 0.3s">
            <a href="#">Build</a>
          </li>
          <li class="slideUp" style="animation-delay: 0.5s">
            <a href="#">Explore</a>
          </li>
        </ul>
        <button class="btn slideUp" style="animation-delay: 0.7s">
          Start now
        </button>
        <button
          class="menu-btn slideUp"
          style="animation-delay: 0.2s"
          @click="toggleSidebar"
        >
          <menu-icon size="1.5x" />
        </button>
      </nav>
      <transition name="swipe">
        <aside v-if="sidebarIsOpen === true" class="sidebar">
          <ul class="sidebar-links">
            <li>
              <div class="menu-btn--container">
                <button class="menu-btn" @click="toggleSidebar">
                  <x-icon size="1.5x" />
                </button>
              </div>
            </li>
            <li class="slideUp" style="animation-delay: 0.1s">
              <a href="#">Learn</a>
            </li>
            <li class="slideUp" style="animation-delay: 0.3s">
              <a href="#">Build</a>
            </li>
            <li class="slideUp" style="animation-delay: 0.5s">
              <a href="#">Explore</a>
            </li>
            <li class="slideUp" style="animation-delay: 0.07s">
              <a class="btn">Start now</a>
            </li>
          </ul>
        </aside>
      </transition>
      <main class="main">
        <nuxt />
      </main>
    </div>
  </div>
</template>
<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'
export default {
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      sidebarIsOpen: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen
    },
  },
}
</script>
<style scoped>
@import '@/assets/css/Layout.css';
@import '@/assets/css/Button.css';
</style>
