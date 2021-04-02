<template>
  <div class="total-value" :style="balanceColor">
    <i class="el-icon-wallet"></i>Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    balanceColor: function () {
      if (this.total > 0) {
        return {color: '#00867d'};
      } else if (this.total < 0) {
        return {color: '#7f0000'};
      }
      return {color: '#333333'};
    }
  }
};
</script>

<style scoped>
.total-value {
  margin-top: 40px;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(150, 150, 150, 1);
}
</style>