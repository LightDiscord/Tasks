<template>
  <div>
    <h1 class="title">Tasks</h1>

    <TaskInput />

    <template v-for="(task, index) in tasks">
      <hr :key="index">
      <Task :task="task" :key="task.id"/>
    </template>
  </div>
</template>

<script>
import { Task, TaskInput } from '@/components/tasks';
import { createNamespacedHelpers } from 'vuex';

const tasks = createNamespacedHelpers('tasks');

export default {
  name: 'tasks',
  computed: tasks.mapState(['tasks']),
  components: {
    Task,
    TaskInput
  }
}
</script>
