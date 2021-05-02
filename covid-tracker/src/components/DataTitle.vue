<template>
  <div class="text-center">
    <div class="flex justify-center items-center h-20">
      <h2 class="text-3xl font-bold">Global</h2>
      <span class="fas fa-globe text-2xl ml-1"></span>
    </div>
    <div class="text-2xl mt-4 mb-5">
      <p>{{ timestamp }}</p>
      <p class="text-sm text-gray-500">(UTC time, yesterday)</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DataTitle',
  props: {
    dataDate: {
      type: Number,
      required: true,
    },
  },
  computed: {
    timestamp() {
      return moment(this.dataDate).subtract(1, 'days').format('DD.MM.YYYY');
    },
  },
};
</script>
