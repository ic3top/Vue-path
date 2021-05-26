import { mapMutations } from 'vuex';

export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    board: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['MOVE_TASK', 'MOVE_COLUMN']),
    moveTaskOrColumn (e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData('type');
      if (type === 'task') {
        this.moveTask(e, toTasks, toTaskIndex);
        return;
      }
      this.moveColumn(e, toColumnIndex);
    },
    moveColumn (e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData('from-column-index');

      this.MOVE_COLUMN({
        fromColumnIndex,
        toColumnIndex,
      });
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
  },
};
