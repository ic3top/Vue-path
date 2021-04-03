<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notifications',
  computed: {
    ...mapGetters(['messagePool'])
  },
  watch: {
    messagePool: 'showNotification'
  },
  methods: {
    showNotification({ type, msg }) {
      this.$toast.show(`${msg}`, {
        type
      });
    }
  }
};
</script>

<style scoped>

</style>
