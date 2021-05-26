<template>
    <div
      class="task"
      :class="{ done: task.done }"
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
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import moveTaskOrColumnMixin from '../mixins/moveTaskOrColumnMixin';

export default {
  name: 'VTask',
  mixins: [moveTaskOrColumnMixin],
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['DELETE_TASK']),
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } });
    },
    pickupTask (e, taskIndex, columnIndex) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.dropEffect = 'move';

      e.dataTransfer.setData('from-task-index', taskIndex);
      e.dataTransfer.setData('from-column-index', columnIndex);
      e.dataTransfer.setData('type', 'task');
    },
    deleteTask (e, tasks, taskIndex) {
      this.DELETE_TASK({ tasks, taskIndex });
    },
  },
};
</script>

<style scoped>
.task {
  @apply mb-2 py-2 px-2 cursor-pointer hover:shadow-md;
  @apply shadow rounded bg-white text-grey-darkest no-underline;
  transition: all .2s ease;
}

.done {
  @apply bg-grey shadow-none line-through
}
</style>
