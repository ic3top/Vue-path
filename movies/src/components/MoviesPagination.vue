<template>
  <nav class="movies-pagination d-flex justify-content-center p-4">
    <v-pagination
      v-model="currentPageModel"
      :pages="total"
      :range-size="0"
      active-color="rgba(0, 0, 0, .7)"
      :hideFirstButton="hideButtons"
      :hideLastButton="hideButtons"
    />
  </nav>
</template>

<script>
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';

export default {
  name: 'MoviesPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    }
  },
  emits: ['pageChanged'],
  components: {
    VPagination
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(numberOfPage) {
        this.$emit('pageChanged', numberOfPage);
      }
    },
    hideButtons() {
      return window.innerWidth < 576;
    }
  }
};
</script>

<style>
.Page {
  font-size: max(3vh, 1vw);
  color: #fff;
  margin: 0 6px;
  width: auto;
  height: auto;
  padding: 0 10px;
  border: 1px;
}
.Page:hover  {
  background-color: rgba(0, 0, 0, .3)!important;
  border: none;
}
.Pagination {
  background-color: rgba(255, 255, 255, .2);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #333;
}
.Control {
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 576px) {
  .p-4 {
    padding: 1vw!important;
  }
}
</style>
