<template>
  <div class="mt-8 flex items-center md:justify-center">
    <span class="fas fa-search"></span>
    <select
    @change="onChange"
    v-model="selected"
    class="form-select block border p-3 rounded ml-2">
    <option value="0" selected>Select Country</option>
    <option v-for="country in countries" :value="country.country" :key="country.countryInfo._id">
      {{ country.country }}
    </option>
  </select>
  </div>
</template>

<script>
export default {
  name: 'CountrySelect',
  props: {
    countries: {
      countries: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const selected = this.countries.find((item) => item.country === this.selected);
      this.$emit('get-country', selected);
    },
  },
};
</script>
