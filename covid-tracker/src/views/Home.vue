<template>
  <main v-if="!loading">
    <data-title :text="currentLocation"
                :dataDate="stats.updated">
    </data-title>

    <data-boxes :stats="stats"></data-boxes>

    <country-select @get-country="getCountryData" :countries="countries"></country-select>
    <button @click="clearCountryData"
            v-if="currentLocation !== 'Global'"
            class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-500">
      Clear filters <span class="fas fa-broom"></span>
    </button>
  </main>
  <main v-else class="text-center mt-48">
    <span class="fas fa-circle-notch fa-spin text-4xl"></span>
    <p class="text-gray-500 text-1xl mt-5">Fetching data...</p>
  </main>
</template>

<script>
import DataTitle from '../components/DataTitle.vue';
import DataBoxes from '../components/DataBoxes.vue';
import CountrySelect from '../components/CountrySelect.vue';

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  data() {
    return {
      currentLocation: 'Global',
      loading: true,
      stats: {},
      countries: [],
    };
  },
  methods: {
    async getCovidData() {
      const res = await fetch('https://disease.sh/v3/covid-19/all');
      const data = res.json();
      return data;
    },
    async getCountries() {
      const res = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=false');
      const data = await res.json();
      return data;
    },
    getCountryData(selectedCountry) {
      if (selectedCountry) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        this.currentLocation = selectedCountry.country;
        this.stats = selectedCountry;
      }
    },
    async clearCountryData() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.loading = true;
      this.currentLocation = 'Global';
      this.stats = await this.getCovidData();
      this.loading = false;
    },
  },
  async created() {
    this.stats = await this.getCovidData();
    this.countries = await this.getCountries();
    this.loading = false;
  },
};
</script>
