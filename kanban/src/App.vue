<template>
  <router-view />
  <info-label />
</template>

<script>
import InfoLabel from './components/InfoLabel.vue';

export default {
  name: 'App',
  components: {
    InfoLabel,
  },
};
</script>

<style>
body, html {
  height: 100%;
}

body {
  background: linear-gradient(45deg, rgba(34,195,134,1) 0%, rgba(195,45,253,1) 100%);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  @apply mx-auto;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.slide-up-enter-from {
  transform: translateY(-40px);
  opacity: 0;
}
.slide-up-enter-active {
  transition: all 0.2s ease-out;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-out;
}
.slide-right-leave-to {
  transform: translateX(-100%);
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>
