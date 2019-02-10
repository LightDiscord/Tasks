<template>
  <div>
    <h3 class="title is-5" :class="{ done: task.done }">{{ task.text }}</h3>
    <div class="content is-small">
        <time :datetime="creationIso">{{ creationString }}</time>
    </div>
    <div class="buttons">
      <a class="button"
        :class="{ 'is-loading': updating }"
        :disabled="updating"
        @click="check">
        <font-awesome-icon :icon="['far', task.done ? 'check-square' : 'square']" />
      </a>

      <a class="button is-danger"
        :class="{ 'is-loading': updating }"
        :disabled="updating"
        @click="remove">
        <font-awesome-icon icon="trash-alt" />
      </a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: ['task'],
  data: () => ({
    updating: false
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
    remove() {
      this.updating = true;
      this.$store.dispatch('tasks/remove', this.task.id)
        .then(() => (this.updating = false));
    },

    check() {
      this.updating = true;
      this.$store.dispatch('tasks/check', this.task.id)
        .then(() => (this.updating = false));
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="sass" scoped>
.done
  text-decoration: line-through
</style>
