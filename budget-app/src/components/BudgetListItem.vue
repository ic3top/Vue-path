<template>
  <div class="list-item">
    <span class="budget-comment">{{ comment }}</span>
    <span class="budget-value">{{ value }}<i :class="icon"></i></span>
    <el-button type="danger" @click="deleteItem(id)" icon="el-icon-delete"></el-button>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    comment: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteItem(id) {
      if (confirm(`The "${this.comment}" will be deleted, are you sure?`)) {
        this.$store.commit('deleteItem', id);
      }
    }
  },
  computed: {
    icon() {
      return (this.type === 'INCOME') ? 'el-icon-top' : 'el-icon-bottom';
    }
  }
};
</script>

<style scoped>
.list-item {
  margin-top: 5px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  min-width: 50px;
}
.budget-comment {
  word-break: break-all;
  padding-right: 15px;
}
</style>