<template>
  <section class="hero">
    <div class="hero-content">
      <span>Welcome to Cosmos</span>
      <h1>The Internet of Blockchains</h1>
      <p>
        Cosmos is an ever-expanding ecosystem of interconnected apps and
        services, an Interchain built for a decentralized future.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'Main',
}
</script>

<style scoped>
.hero {
  @apply min-h-screen pt-32;
}

.hero-content {
  @apply w-full text-center;
}

.hero-content > span {
  @apply block tracking-widest uppercase text-xs text-gray-400 mb-5;
}

.hero-content > h1 {
  @apply text-3xl font-semibold text-gray-200 mb-4;
}
.hero-content > p {
  @apply text-lg text-gray-400;
}

@screen md {
}

@screen lg {
  .hero-content > h1 {
    @apply text-7xl;
  }
  .hero-content {
    @apply text-left w-6/12;
  }
}

@screen xl {
}

@screen 2xl {
}
</style>
