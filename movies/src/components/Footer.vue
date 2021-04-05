<template>
  <MDBFooter class="bg-dark text-light">
    <div class="text-center p-3 letter-spacing">
      © 2021 Copyright:
      <a href="https://github.com/ic3top">
        ic3top
        <MDBIcon icon="github" iconStyle="fab"></MDBIcon>
      </a>
    </div>
  </MDBFooter>
</template>

<script>
import { MDBBtn, MDBFooter, MDBIcon } from 'mdb-vue-ui-kit';

export default {
  name: 'Footer',
  components: {
    MDBFooter,
    MDBBtn,
    MDBIcon
  }
};
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 3px;
}
</style>
