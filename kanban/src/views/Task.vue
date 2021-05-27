<template>
  <div class="task-view relative">
    <button class="absolute top-2 right-2 p-1" @click="$emit('close-task')">
      <font-awesome-icon icon="times" size="1x" />
    </button>
    <label for="task-name" class="text-grey-darker text-sm">Name of the task</label>
    <input
      class="w-full p-2 font-bold text-xl w-full shadow-inner"
      id="task-name"
      :value="task.name"
      placeholder="task.name"
      @change="updateTaskProperty($event, 'name')"
    />
    <label for="task-description" class="block mt-5 text-sm text-grey-darker">
      Description of the task
    </label>
    <textarea
      v-model="task.description"
      class="w-full relative bg-transparent mt-2 px-2 pb-3 border-none rounded shadow-inner"
      placeholder="Description..."
      id="task-description"
      @change="updateTaskProperty($event, 'description')"
    >
    </textarea>
    <div class="flex gap-2">
      <label
        :class="{ 'bg-green text-white': task.done }"
        class="flex items-center mt-2 p-2 rounded bg-grey-light font-bold"
      >
        <input
          class="mr-1"
          type="checkbox"
          v-model="task.done"
          @change="UPDATE_TASK({ task, key: 'done', value: task.done})"

        >Done
      </label>
      <label
        class="flex items-center mt-2 p-2 rounded bg-grey-light font-bold"
      >
        <input
          class="mr-1"
          type="color"
          :value="task.backgroundColor || '#ffffff'"
          @change="changeColor"
        >Background color
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { isLightColor } from '../utils';

export default {
  name: 'Task',
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    },
  },
  methods: {
    ...mapMutations(['UPDATE_TASK']),
    updateTaskProperty(e, key) {
      this.UPDATE_TASK({
        task: this.task,
        key,
        value: e.target.value,
      });
    },
    changeColor(event) {
      const color = event.target.value;

      if (isLightColor(color)) {
        this.UPDATE_TASK({ task: this.task, key: 'textColor', value: '#000000' });
      } else {
        this.UPDATE_TASK({ task: this.task, key: 'textColor', value: '#ffffff' });
      }
      this.UPDATE_TASK({ task: this.task, key: 'backgroundColor', value: color });
    },
  },
};
</script>

<style>
.task-view {
  @apply relative bg-white m-32 mx-auto p-4 text-left rounded shadow-xl;
  max-width: 700px;
}
</style>
