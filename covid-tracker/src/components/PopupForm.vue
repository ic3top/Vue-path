<template>
  <transition name="bounce">
    <div v-if="showModal" class="modal-mask">
      <div class="shadow-xl w-1/3 xl:w-1/2 md:w-full md:mx-8">
        <div class="relative p-2 bg-blue-800 text-center rounded-t-md">
          <h2 class="font-bold text-2xl text-white">Add a new country</h2>
          <button @click="onClose"
                  class="absolute top-1 right-3 p-1 text-white text-lg">
            <span class="fas fa-times"></span>
          </button>
        </div>
        <div class="bg-white rounded-b-md p-4 font-normal">
          <form @submit.prevent="onFormSubmit"
                class="py-4 flex flex-col w-full">
            <input v-model="countryName"
                   :class="{ 'border-red-300': !valid }"
                   @input="valid = true"
                   class="p-2 border"
                   type="text"
                   placeholder="Country name...">
            <hr>

            <h4 class="mt-4 text-gray-500">Additional information:</h4>

            <div v-for="item in allValues"
                 :key="item"
                 class="flex items-center mt-2 border p-2">
              <input class="w-4 h-4"
                     type="checkbox"
                     :id="item"
                     :value="item"
                     v-model="chosenValues">
              <label class="ml-2 w-full text-lg" :for="item">{{ item }}</label>
            </div>
            <hr class="mt-4">
            <div class="flex items-center justify-between p-1">
              <div>
                <p v-if="!valid" class="text-red-400">We didn't find such country...</p>
              </div>
              <button type="submit"
                      class="bg-blue-800 text-white p-3 px-4 rounded hover:bg-blue-600">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupForm',
  props: {
    showModal: {
      type: Boolean,
      default: () => false,
    },
    countries: {
      countries: Array,
      required: true,
    },
  },
  emits: ['close', 'addCard'],
  data() {
    return {
      chosenValues: ['population', 'recovered', 'tests', 'todayCases', 'active'],
      allValues: ['population', 'recovered', 'tests', 'todayCases', 'active'],
      countryName: '',
      valid: true,
    };
  },
  methods: {
    onFormSubmit() {
      if (this.countryName) {
        // eslint-disable-next-line max-len
        const country = this.countries.find((item) => item.country.toLocaleLowerCase() === this.countryName.toLocaleLowerCase());
        if (country) {
          const chosenValues = JSON.parse(JSON.stringify(this.chosenValues));
          this.$emit('addCard', { countryData: country, chosenValues });
          this.$emit('close');
          this.resetData();
          return;
        }
        this.valid = false;
        return;
      }
      this.valid = false;
    },
    onClose() {
      this.$emit('close');
      this.resetData();
    },
    resetData() {
      this.chosenValues = this.allValues.slice();
      this.countryName = '';
      this.valid = true;
      document.body.style.overflowY = 'unset';
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.bounce-enter-active {
  animation: bounce-in .4s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in .4s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.10);
  }
  100% {
    transform: scale(1);
  }
}
</style>
