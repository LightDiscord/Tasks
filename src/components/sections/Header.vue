<template>
  <section class="section">
    <div class="container">
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              You have <strong>0</strong> remaining tasks
            </p>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item">
            <router-link :to="{ name: 'tasks' }">Tasks</router-link>
          </p>
          <p class="level-item">
            <router-link :to="{ name: 'exchanges' }">Exchanges</router-link>
          </p>
          <p class="level-item">
            <router-link :to="{ name: 'settings' }">Settings</router-link>
          </p>
        </div>
      </nav>
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import "@/main.sass"

a.router-link-exact-active
  cursor: auto
  font-weight: bold
  color: $text
</style>
