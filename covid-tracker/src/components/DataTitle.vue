<template>
  <div class="text-center">
    <div class="flex justify-center items-center h-20">
      <h2 class="text-3xl font-bold">{{ text }}</h2>
      <span v-if="text === 'Global'" class="fas fa-globe text-2xl ml-1"></span>
    </div>
    <div class="text-2xl mt-4 mb-10">
      {{ timestamp }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DataTitle',
  props: {
    text: {
      type: String,
      required: true,
    },
    dataDate: {
      type: Number,
      required: true,
    },
  },
  computed: {
    timestamp() {
      return moment(this.dataDate).format('DD.MM.YYYY');
    },
  },
};
</script>
