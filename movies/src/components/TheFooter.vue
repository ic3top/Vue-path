<template>
  <MDBFooter class="bg-dark text-light">
    <div class="text-center p-3 letter-spacing">
      <a href="https://github.com/ic3top/Vue-path/tree/master/movies">
        Source code
        <MDBIcon icon="github" iconStyle="fab"></MDBIcon>
      </a>
    </div>
  </MDBFooter>
</template>

<script>
import { MDBFooter, MDBIcon } from 'mdb-vue-ui-kit';

export default {
  name: 'Footer',
  components: {
    MDBFooter,
    MDBIcon
  }
};
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 3px;
}
</style>
