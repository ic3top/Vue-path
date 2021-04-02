<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="!isEmpty">
        <budget-list-item v-show="item.shown" v-for="(item, prop) in list"
                          :key="prop"
                          :comment="item.comment"
                          :value="item.value"
                          :id="item.id"
                          :type="item.type"
                          @deleteItem="deleteItem(item.id)">
        </budget-list-item>
      </template>
      <el-alert v-else type="info" :title="emptyTitle"></el-alert>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  emits: ['deleteItem'],
  data() {
    return {
      header: "Budget List",
      emptyTitle: "List is empty"
    };
  },
  computed: {
    isEmpty() {
      return !(Object.keys(this.list).filter(key => this.list[key].shown).length);
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
};
</script>

<style scoped>
.budget-list-wrap {
  border: 1px solid lightgrey;
  border-radius: 5px;
  max-width: 500px;
  margin: 40px auto 0 auto;
}
</style>