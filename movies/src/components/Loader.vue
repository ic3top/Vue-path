<template>
  <div class="loader-wrap" v-if="isShowLoader">
    <MDBSpinner style="width: 3rem; height: 3rem" />
  </div>
</template>

<script>
import { MDBSpinner } from 'mdb-vue-ui-kit';
import { mapGetters } from 'vuex';

export default {
  name: 'Loader',
  components: {
    MDBSpinner
  },
  computed: {
    ...mapGetters(['isShowLoader'])
  }
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
