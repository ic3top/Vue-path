<template>
  <div style="height: 100vh" class="flex justify-between flex-col">
    <the-header />
    <div class="container">
      <router-view />
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
