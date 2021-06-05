<template>
  <div class="board">
    <div class="flex items-start">
      <transition-group name="slide-up" class="flex" tag="div" appear>
        <v-column
          v-for="(column, columnIndex) of board.columns"
          :key="columnIndex"
          :column="column"
          :columnIndex="columnIndex"
          :board="board"
        ></v-column>
      </transition-group>

      <div>
        <transition name="slide-up-down" tag="div" class="mr-4" mode="out-in" appear>
          <button
            v-if="!showAddBlock"
            @click="addColumnButtonClick($event)"
            class="add-button"
          >
            + Add a new column
          </button>
          <div v-else>
            <input
              type="text"
              class="p-2 rounded"
              style="width: 230px"
              placeholder="New column name..."
              v-model="newColumnName"
              @keyup.enter="createColumn($event)"
              @keyup.esc="showAddBlock = false"
              @blur="createColumn"
              autofocus
            >
          </div>
        </transition>
      </div>
    </div>

    <router-view @close-task="close" v-slot="{ Component }">
      <transition name="fade" appear>
        <component :is="Component"></component>
      </transition>
      <div v-if="Component" class="task-bg">
      </div>
    </router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import VColumn from '../components/VColumn.vue';

export default {
  name: 'Board',
  components: {
    VColumn,
  },
  data() {
    return {
      newColumnName: '',
      showAddBlock: false,
    };
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task';
    },
  },
  methods: {
    ...mapMutations(['CREATE_COLUMN']),
    close () {
      this.$router.push({ name: 'board' });
    },
    createColumn(event) {
      if (this.newColumnName.length === 0) {
        this.showAddBlock = false;
        return;
      }
      this.CREATE_COLUMN({
        name: this.newColumnName,
      });
      if (event) {
        event.target.focus();
      }
      this.newColumnName = '';
    },
    async addColumnButtonClick(event) {
      this.showAddBlock = true;
      event.target.blur();
    },
  },
};
</script>

<style lang="css">
.board {
  @apply p-4 h-full overflow-auto;
}

.task-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
}

.add-button {
  @apply flex items-center justify-center py-2 rounded bg-grey-light shadow font-bold;
  min-width: 230px;
}
</style>
