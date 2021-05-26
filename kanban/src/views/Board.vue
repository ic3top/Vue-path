<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <div
        class="column"
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
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
          <li
            class="task"
            :class="{ done: task.done }"
            v-for="(task, taskIndex) in column.tasks"
            :key="task.id"
            @click="goToTask(task)"
            @dragstart="pickupTask($event, taskIndex, columnIndex)"
            draggable="true"
            @dragover.prevent
            @dragenter.prevent
            @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
          >
            <h3 class="text-lg font-bold">{{ task.name }}</h3>
            <p class="mt-1 text-sm" v-if="task.description">
              {{ task.description }}
            </p>
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

export default {
  name: 'Board',
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
    ...mapMutations(['CREATE_TASK', 'MOVE_TASK', 'MOVE_COLUMN', 'CREATE_COLUMN', 'DELETE_TASK']),
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } });
    },
    close () {
      this.$router.push({ name: 'board' });
    },
    createTask (e, tasks) {
      this.CREATE_TASK({
        tasks,
        name: e.target.value,
      });
      e.target.value = '';
    },
    createColumn() {
      if (this.newColumnName.length === 0) return;
      this.CREATE_COLUMN({
        name: this.newColumnName,
      });

      this.newColumnName = '';
    },
    pickupTask (e, taskIndex, columnIndex) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.dropEffect = 'move';

      e.dataTransfer.setData('from-task-index', taskIndex);
      e.dataTransfer.setData('from-column-index', columnIndex);
      e.dataTransfer.setData('type', 'task');
    },
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.dropEffect = 'move';

      e.dataTransfer.setData('from-column-index', fromColumnIndex);
      e.dataTransfer.setData('type', 'column');
    },
    moveTaskOrColumn (e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData('type');
      if (type === 'task') {
        this.moveTask(e, toTasks, toTaskIndex);
        return;
      }
      this.moveColumn(e, toColumnIndex);
    },
    moveTask (e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData('from-column-index');
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      const fromTaskIndex = e.dataTransfer.getData('from-task-index');

      this.MOVE_TASK({
        fromTasks,
        toTasks,
        fromTaskIndex,
        toTaskIndex,
      });
    },
    moveColumn (e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData('from-column-index');

      this.MOVE_COLUMN({
        fromColumnIndex,
        toColumnIndex,
      });
    },
    deleteTask(e, tasks, taskIndex) {
      this.DELETE_TASK({ tasks, taskIndex });
    },
  },
};
</script>

<style lang="css">
.task {
  @apply mb-2 py-2 px-2 cursor-pointer hover:shadow-md;
  @apply shadow rounded bg-white text-grey-darkest no-underline;
  transition: all .2s ease;
}

.done {
  @apply bg-grey shadow-none line-through
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
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
