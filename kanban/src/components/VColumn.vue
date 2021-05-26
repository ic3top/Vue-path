<template>
  <v-drop @drop="moveTaskOrColumn">
    <v-drag :transfer-data="{ type: 'column', fromColumnIndex: columnIndex }" class="column">
      <h2 class="flex items-center mb-2 font-bold">
        {{ column.name }}
      </h2>
      <div class="list-none w-full">
          <v-task
            v-for="(task, taskIndex) in column.tasks"
            :key="task.id"
            :task="task"
            :task-index="taskIndex"
            :column="column"
            :column-index="columnIndex"
            :board="board"
          ></v-task>

          <input
            type="text"
            class="w-full p-2 bg-transparent"
            placeholder="+ Enter new task"
            @keyup.enter="createTask($event, column.tasks)"
          >
      </div>
    </v-drag>
  </v-drop>
</template>

<script>
import { mapMutations } from 'vuex';
import moveTaskOrColumnMixin from '../mixins/moveTaskOrColumnMixin';
import VDrag from './VDrag.vue';
import VDrop from './VDrop.vue';
import VTask from './VTask.vue';

export default {
  name: 'VColumn',
  components: {
    VTask,
    VDrag,
    VDrop,
  },
  mixins: [moveTaskOrColumnMixin],
  methods: {
    ...mapMutations(['CREATE_TASK']),
    createTask (e, tasks) {
      this.CREATE_TASK({
        tasks,
        name: e.target.value,
      });
      e.target.value = '';
    },
  },
};
</script>

<style scoped>
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
