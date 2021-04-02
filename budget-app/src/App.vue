<template>
  <form-append @submitForm="onFormSubmit"></form-append>
  <total-balance :total="totalBalance"></total-balance>
  <el-button-group class="buttons">
    <el-button type="primary" icon="el-icon-sort-up" @click="sortByType('INCOME')">Income</el-button>
    <el-button type="primary" icon="el-icon-sort-down" @click="sortByType('OUTCOME')">Outcome</el-button>
    <el-button type="primary" icon="el-icon-sort" @click="showAll">All</el-button>
  </el-button-group>
  <budget-list :list="list" @deleteItem="onDeleteItem"></budget-list>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormAppend from "@/components/FormAppend";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormAppend
  },
  data() {
    return {
      list: {}
    };
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, { value }) => acc+value, 0);
    }
  },
  methods: {
    onDeleteItem(id) {
      delete this.list[id];
    },
    onFormSubmit(item) {
      this.showAll();
      const newObj = {
        ...item,
        id: String(Math.random()),
      };

      this.list[newObj.id] = newObj;
    },
    sortByType(typeToShow) {
      for (const [key, { type }] of Object.entries(this.list)) {
        if(type === typeToShow) {
          this.list[key].shown = true;
          continue;
        }
        this.list[key].shown = false;
      }
    },
    showAll() {
      for (const key of Object.keys(this.list)) {
        this.list[key].shown = true;
      }
    }
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
