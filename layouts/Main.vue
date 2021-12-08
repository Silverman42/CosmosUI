<template>
  <div class="body">
    <div class="foreground"></div>
    <div class="wrapper">
      <nav class="navbar">
        <a href="#" class="navbar-left">
          <img src="/logo.svg" alt="cosmos logo" />
        </a>
        <ul class="navlink">
          <li>
            <a href="#">Learn</a>
          </li>
          <li>
            <a href="#">Build</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
        </ul>
        <button class="btn">Start now</button>
        <button class="menu-btn" @click="toggleSidebar">
          <menu-icon size="1.5x" />
        </button>
      </nav>
      <aside v-if="sidebarIsOpen === true" class="sidebar">
        <ul class="sidebar-links">
          <li>
            <div class="menu-btn--container">
              <button class="menu-btn" @click="toggleSidebar">
                <x-icon size="1.5x" />
              </button>
            </div>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
          <li>
            <a href="#">Build</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a class="btn">Start now</a>
          </li>
        </ul>
      </aside>
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
/* @import "@/layouts/Layout.css"; */
.body {
  background-image: url('/bg.png');
  @apply min-h-screen relative bg-cover;
}
.foreground {
  background: linear-gradient(
    0deg,
    rgba(1, 1, 1, 1) 0%,
    rgba(3, 3, 3, 0.4150035014005602) 34%,
    rgba(7, 32, 138, 0.4290091036414566) 100%
  );
  @apply absolute top-0 left-0 bottom-0 w-full h-full;
}
.wrapper {
  @apply max-w-6xl px-4 mx-auto relative z-10;
}

.navbar {
  @apply flex justify-between items-center py-5;
}
.navbar .navlink,
.navbar .btn {
  @apply hidden;
}
.navlink .navlink-left {
  @apply w-20;
}

.navlink .navlink-left img {
  @apply w-full;
}
.btn {
  @apply inline-block py-3 px-6 bg-gray-300 rounded-md text-base;
  @apply text-black !important;
}
.sidebar-links li {
  @apply py-4 px-5;
}

.sidebar-links li a {
  @apply text-xl text-gray-300;
}

.sidebar-links li a:hover {
  @apply text-white;
}

.sidebar {
  @apply fixed w-full top-0 left-0 h-screen overflow-y-auto bg-black;
}

.menu-btn {
  @apply py-2 px-3 text-gray-300;
}

.menu-btn {
  @apply text-white;
}

.menu-btn--container {
  @apply flex justify-end;
}

@screen md {
  .navbar .menu-btn,
  .sidebar {
    @apply hidden;
  }
  .navbar .navlink {
    @apply flex justify-around items-center;
  }
  .navbar .navlink li {
    @apply mx-4 text-gray-300;
  }
  .navbar .navlink li:hover {
    @apply text-white;
  }
  .navbar .btn {
    @apply inline-block;
  }
}
</style>
