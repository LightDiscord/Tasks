<template>
  <div>
    <div class="field">
      <div class="control">
        <input
          type="text"
          class="input"
          @keyup.enter="createTask"
          placeholder="Enter to create a new task">
      </div>
    </div>

    <template v-for="(task, index) in tasks">
      <hr :key="index">
      <Task :task="task" :key="task.id"/>
    </template>
  </div>
</template>

<script>
import Task from '@/components/Task';
import { createNamespacedHelpers } from 'vuex';

const tasks = createNamespacedHelpers('tasks');

export default {
  name: 'tasks',
  computed: tasks.mapState(['tasks']),
  methods: {
    ...tasks.mapMutations(['create']),
    createTask({ target }) {
      const { value } = target;

      this.create(value);
      target.value = '';
    },
  },
  components: {
    Task
  }
}
</script>
