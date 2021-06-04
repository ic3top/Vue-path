<template>
  <v-drop @drop="moveTaskOrColumn">
    <v-drag :transfer-data="{ type: 'column', fromColumnIndex: columnIndex }" class="column">
      <input class="mb-2 font-bold p-1 pr-3 bg-transparent truncate"
             :value="column.name"
             @input="updateColumnName($event)"
             @keyup.enter="$event.target.blur()"
      />
      <button class="delete-btn" @click="deleteColumn">
        <font-awesome-icon icon="times" size="1x" />
      </button>
      <div class="list-none w-full">
        <transition-group name="slide-left" tag="div" appear>
          <v-task
            v-for="(task, taskIndex) in column.tasks"
            :key="task.id"
            :task="task"
            :task-index="taskIndex"
            :column="column"
            :column-index="columnIndex"
            :board="board"
            @delete-task="deleteTask"
          ></v-task>
        </transition-group>

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
    ...mapMutations(['CREATE_TASK', 'DELETE_TASK', 'DELETE_COLUMN', 'UPDATE_COLUMN']),
    createTask (e, tasks) {
      if (!e.target.value) return;
      this.CREATE_TASK({
        tasks,
        name: e.target.value,
      });
      e.target.value = '';
    },
    deleteTask (taskIndex) {
      this.DELETE_TASK({ tasks: this.column.tasks, taskIndex });
    },
    deleteColumn () {
      this.DELETE_COLUMN({ columnIndex: this.columnIndex });
    },
    updateColumnName(event) {
      this.UPDATE_COLUMN({ column: this.column, key: 'name', value: event.target.value });
    },
  },
};
</script>

<style scoped>
.column {
  @apply relative bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.delete-btn {
  @apply absolute top-1 right-2 p-1 hidden;
}

.column:hover .delete-btn {
  display: block;
}
</style>
