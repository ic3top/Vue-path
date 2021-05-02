<template>
  <div class="v-card">
    <h2 class="text-3xl text-blue-900 mb-4 font-bold">{{ title }}</h2>
    <div class="flex justify-between items-center">
      <h2 class="text-blue-700 text-2xl font-bold">Total cases</h2>
      <p class="text-xl">{{ numberWithCommas(additionalData.countryData.cases) }}</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <h2 class="text-blue-900 text-2xl font-bold">Total deaths</h2>
      <p class="text-xl">{{ numberWithCommas(additionalData.countryData.deaths) }}</p>
    </div>
    <h3 class="text-gray-600 text-xl mb-2 mt-4" v-if="additionalData.chosenValues.length > 0">
      Additional info:
    </h3>
    <div class="overflow-y-auto h-44 scroll pr-3">
      <div class="v-card-additional"
           v-for="property in additionalData.chosenValues"
           :key="property">
        <span class="text-xl font-bold">{{ capitalize(property) }}:</span>
        <p class="text-xl">{{ numberWithCommas(additionalData.countryData[property]) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    title: {
      type: String,
      default: () => '',
    },
    additionalData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    numberWithCommas(x) {
      if (typeof x !== 'undefined') return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      console.error('FATAL: invalid data');
      return 'FATAL: invalid data';
    },
  },
};
</script>

<style scoped>
.v-card {
  @apply shadow-md relative bg-blue-100 py-10 px-4 rounded text-center transition-shadow
  hover:shadow-lg;
}

.v-card-additional {
  @apply py-3 text-left flex justify-between items-center border-b border-gray-100;
}

.scroll::-webkit-scrollbar {
  width: 4px;
}

.scroll::-webkit-scrollbar-track {
  background-color: #f9f9f9;
}
</style>
