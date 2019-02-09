<template>
  <div>
    <h3 class="title is-5">{{ task.text }}</h3>
    <div class="content is-small">
        <time :datetime="creationIso">{{ creationString }}</time>
    </div>
    <div>
      <a class="button is-danger"
        :class="{ 'is-loading': removing }"
        :disabled="removing"
        @click="remove">
        Remove
      </a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const tasks = createNamespacedHelpers('tasks');

export default {
  props: ['task'],
  data: () => ({
    removing: false
  }),
  computed: {
    creationIso() {
      return (new Date(this.task.creation)).toISOString();
    },

    creationString() {
      return (new Date(this.task.creation)).toLocaleString();
    }
  },
  methods: {
    ...tasks.mapActions({
      delete: 'remove'
    }),

    remove() {
      this.removing = true;
      this.delete(this.task.id)
        .then(() => (this.removing = false));
    }
  }
}
</script>
