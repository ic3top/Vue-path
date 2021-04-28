<template>
  <main v-if="!loading">
    <data-title :dataDate="stats.updated">
    </data-title>

    <data-boxes :stats="stats"></data-boxes>

    <div class="grid grid-cols-4 xl:grid-cols-2 md:grid-cols-1 mt-4 gap-4 items-center">
      <v-card v-for="item in cardsList"
              :key="item.countryData.countryInfo._id"
              :title="item.countryData.country"
              :additional-data="item">
      </v-card>
      <div class="h-40 flex items-center justify-center shadow-md hover:shadow-lg rounded border">
        <button class="w-full h-full text-white bg-blue-100 text-blue-900 text-3xl"
                @click="showModalHandler">
          <span class="fas fa-plus"></span>
        </button>
      </div>
    </div>

    <button @click="clearCountryData"
            v-if="cardsList.length > 0"
            class="bg-blue-900 text-white rounded p-3 mt-10 focus:outline-none hover:bg-blue-600">
      Delete all <span class="fas fa-broom"></span>
    </button>

  </main>
  <main v-else class="text-center mt-48">
    <span class="fas fa-circle-notch fa-spin text-4xl"></span>
    <p class="text-gray-500 text-1xl mt-5">Fetching data...</p>
  </main>
  <popup-form :show-modal="showModal"
              :countries="countries"
              @close="showModal = false"
              @addCard="addCardHandler">
  </popup-form>
</template>

<script>
import DataTitle from '../components/DataTitle.vue';
import DataBoxes from '../components/DataBoxes.vue';
import PopupForm from '../components/PopupForm.vue';
import VCard from '../components/VCard.vue';

export default {
  name: 'Home',
  components: {
    PopupForm,
    DataTitle,
    DataBoxes,
    VCard,
  },
  data() {
    return {
      loading: true,
      showModal: false,
      stats: {},
      countries: [],
      cardsList: JSON.parse(localStorage.getItem('cardsList')) || [],
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
    async clearCountryData() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.cardsList = [];
      localStorage.setItem('cardsList', []);
    },
    addCardHandler(data) {
      this.cardsList = this.cardsList.filter((countryObj) => countryObj.countryData.country
        !== data.countryData.country);
      this.cardsList.push(data);
      localStorage.setItem('cardsList', JSON.stringify(this.cardsList));
    },
    showModalHandler() {
      this.showModal = true;
      document.body.style.overflowY = 'hidden';
    },
  },
  async created() {
    this.stats = await this.getCovidData();
    this.countries = await this.getCountries();
    this.loading = false;
  },
};
</script>
