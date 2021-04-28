<template>
  <div class="min-h-screen flex justify-between flex-col">
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

<style>
::-webkit-scrollbar {
  width: 7px;
  background-color: #DBEAFE;
}

::-webkit-scrollbar-thumb {
  background-color: #1E3A8A;
}
</style>
