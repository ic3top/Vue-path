<template>
  <select
    @change="onChange"
    v-model="selected"
    class="form-select mt-8 block w-full border p-3 rounded">
    <option value="0" selected >Select Country</option>
    <option v-for="country in countries" :value="country.country" :key="country.countryInfo._id">
      {{ country.country }}
    </option>
  </select>
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
