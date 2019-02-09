<template>
  <div>
    <div class="field">
      <div class="control" :class="{ 'is-loading': creating }">
        <input
          type="text"
          class="input"
          v-model="input"
          @keyup.enter="createTask"
          :readonly="creating"
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
  data: () => ({
    creating: false,
    input: ''
  }),
  computed: tasks.mapState(['tasks']),
  methods: {
    ...tasks.mapActions(['create']),
    createTask() {
      this.creating = true;
      this.create(this.input)
        .then(() => (this.creating = false, this.input = ''));
    },
  },
  components: {
    Task
  }
}
</script>
