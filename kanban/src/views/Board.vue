<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <v-column
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
        :column="column"
        :columnIndex="columnIndex"
        :board="board"
      ></v-column>

      <div class="column flex pr-2">
        <input
          type="text"
          class="p-2 flex-grow rounded-l"
          placeholder="New column name..."
          v-model="newColumnName"
          @keyup.enter="createColumn"
        >
        <button
          class="flex justify-center items-center p-1 bg-grey-lighter rounded-r hover:bg-grey"
          @click="createColumn"
          aria-label="Add task"
        >
          <font-awesome-icon icon="plus" size="2x" />
        </button>
      </div>
    </div>

    <div
      class="task-bg"
      v-if="isTaskOpen"
      @click.self="close"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import VColumn from '../components/VColumn.vue';

export default {
  name: 'Board',
  components: {
    VColumn,
  },
  data() {
    return {
      newColumnName: '',
    };
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task';
    },
  },
  methods: {
    ...mapMutations(['CREATE_COLUMN']),
    close () {
      this.$router.push({ name: 'board' });
    },
    createColumn() {
      if (this.newColumnName.length === 0) return;
      this.CREATE_COLUMN({
        name: this.newColumnName,
      });

      this.newColumnName = '';
    },
  },
};
</script>

<style lang="css">
.board {
  @apply p-4 h-full overflow-auto;
}

.task-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
}
</style>
