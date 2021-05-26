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
    moveTaskOrColumn (transferData) {
      if (transferData.type === 'task') {
        this.moveTask(transferData);
        return;
      }
      this.moveColumn(transferData);
    },
    moveColumn ({ fromColumnIndex }) {
      this.MOVE_COLUMN({
        fromColumnIndex,
        toColumnIndex: this.columnIndex,
      });
    },
    moveTask ({ fromColumnIndex, fromTaskIndex }) {
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      const toTasks = this.board.columns[this.columnIndex].tasks;
      const toTaskIndex = this.taskIndex === undefined ? toTasks.length : this.taskIndex;

      this.MOVE_TASK({
        fromTasks,
        toTasks,
        fromTaskIndex,
        toTaskIndex,
      });
    },
  },
};
