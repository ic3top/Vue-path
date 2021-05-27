import { createStore } from 'vuex';
import defaultBoard from '../default-board';
import { saveStatePlugin, uuid } from '../utils';

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard;

export default createStore({
  plugins: [saveStatePlugin],
  state: {
    board,
  },
  getters: {
    getTask (state) {
      // eslint-disable-next-line consistent-return
      return (taskId) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const col of state.board.columns) {
          // eslint-disable-next-line no-restricted-syntax
          for (const task of col.tasks) {
            if (task.id.toString() === taskId.toString()) {
              return task;
            }
          }
        }
      };
    },
  },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: '',
      });
    },
    CREATE_COLUMN (state, { name }) {
      state.board.columns.push({
        name,
        tasks: [],
      });
    },
    UPDATE_TASK (state, { task, key, value }) {
      // eslint-disable-next-line no-param-reassign
      task[key] = value;
    },
    MOVE_TASK (state, {
      fromTasks, toTasks, fromTaskIndex, toTaskIndex,
    }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    MOVE_COLUMN (state, { fromColumnIndex, toColumnIndex }) {
      if (typeof fromColumnIndex === 'number') {
        const columnList = state.board.columns;
        const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
        columnList.splice(toColumnIndex, 0, columnToMove);
      }
    },
    DELETE_TASK (state, { tasks, taskIndex }) {
      tasks.splice(taskIndex, 1);
    },
    DELETE_COLUMN(state, { columnIndex }) {
      state.board.columns.splice(columnIndex, 1);
    },
  },
});
