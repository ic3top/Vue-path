<template>
  <div class="grid grid-cols-2 md:grid-cols-1 gap-4">

    <div class="shadow-md bg-blue-100 p-10 rounded text-center transition-shadow
                hover:shadow-lg">
      <h2 class="text-3xl text-blue-900 mb-4 font-bold">Cases</h2>

      <div class="text-2xl mb-4">
        <h3 class="font-bold">New:</h3>
        <p>{{ numberWithCommas(stats.todayCases) }}</p>
      </div>
      <div class="text-2xl mb-4">
        <h3 class="font-bold">Total:</h3>
        <p>{{ numberWithCommas(stats.cases) }}</p>
      </div>
    </div>

    <div class="shadow-md bg-blue-900 p-10 rounded text-center transition-shadow hover:shadow-lg">
      <h2 class="text-3xl mb-4 font-bold text-white">Deaths</h2>

      <div class="text-2xl mb-4 text-blue-50">
        <h3 class="font-bold">New:</h3>
        <p>{{ numberWithCommas(stats.todayDeaths) }}</p>
      </div>
      <div class="text-2xl mb-4 text-blue-50">
        <h3 class="font-bold">Total:</h3>
        <p>{{ numberWithCommas(stats.deaths) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBoxes',
  props: ['stats'],
  methods: {
    numberWithCommas(x) {
      if (typeof x !== 'undefined') return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      console.error('FATAL: invalid data');
      return 'FATAL: invalid data';
    },
  },
};
</script>

<style scoped>

</style>
