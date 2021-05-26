<template>
  <div
    class="column"
    draggable="true"
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickupColumn($event, columnIndex)"
  >
    <h2 class="flex items-center mb-2 font-bold">
      {{ column.name }}
    </h2>
    <ul class="list-none w-full">
      <li>
        <v-task
          v-for="(task, taskIndex) in column.tasks"
          :key="task.id"
          :task="task"
          :task-index="taskIndex"
          :column="column"
          :column-index="columnIndex"
          :board="board"
        ></v-task>
      </li>

      <li class="w-full">
        <input
          type="text"
          class="w-full p-2 bg-transparent"
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, column.tasks)"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import moveTaskOrColumnMixin from '../mixins/moveTaskOrColumnMixin';
import VTask from './VTask.vue';

export default {
  name: 'VColumn',
  components: {
    VTask,
  },
  mixins: [moveTaskOrColumnMixin],
  methods: {
    ...mapMutations(['CREATE_TASK']),
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.dropEffect = 'move';

      e.dataTransfer.setData('from-column-index', fromColumnIndex);
      e.dataTransfer.setData('type', 'column');
    },
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
