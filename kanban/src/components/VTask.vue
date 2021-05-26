<template>
  <v-drop @drop="moveTaskOrColumn">
    <v-drag
      class="task"
      :class="{ done: task.done }"
      :transfer-data="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex,
      }"
      @click="goToTask(task)"
    >
      <h3 class="text-lg font-bold">{{ task.name }}</h3>
      <p class="mt-1 text-sm" v-if="task.description">
        {{ task.description }}
      </p>
    </v-drag>
  </v-drop>
</template>

<script>
import { mapMutations } from 'vuex';
import VDrag from './VDrag.vue';
import VDrop from './VDrop.vue';
import moveTaskOrColumnMixin from '../mixins/moveTaskOrColumnMixin';

export default {
  name: 'VTask',
  mixins: [moveTaskOrColumnMixin],
  components: {
    VDrop,
    VDrag,
  },
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
