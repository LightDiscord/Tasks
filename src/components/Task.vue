<template>
  <div>
    <h3 class="title is-5">{{ task.text }}</h3>
    <div class="content is-small">
        <time :datetime="creationIso">{{ creationString }}</time>
    </div>
    <div>
      <a class="button is-danger" @click="remove">Remove</a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const tasks = createNamespacedHelpers('tasks');

export default {
  props: ['task'],
  computed: {
    creationIso() {
      return (new Date(this.task.creation)).toISOString();
    },

    creationString() {
      return (new Date(this.task.creation)).toLocaleString();
    }
  },
  methods: {
    ...tasks.mapMutations({
      delete: 'remove'
    }),

    remove() {
      this.delete(this.task.id)
    }
  }
}
</script>
