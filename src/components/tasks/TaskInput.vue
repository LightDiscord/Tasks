<template>
  <div class="field">
    <div class="control" :class="{ 'is-loading': creating }">
      <input
        type="text"
        class="input"
        v-model="input"
        @keyup.enter="create"
        :readonly="creating"
        placeholder="Enter to create a new task">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    creating: false,
    input: ''
  }),
  methods: {
    create() {
      this.creating = true;
      this.$store.dispatch('tasks/create', this.input)
        .then(() => (this.creating = false, this.input = ''))
    }
  }
}
</script>
