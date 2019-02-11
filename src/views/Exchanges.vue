<template>
  <div>
    <h1 class="title">Exchanges</h1>

    <div class="columns" v-if="!connect">
      <div class="column">
        <h2 class="title is-4">Start communication</h2>

        <textarea class="textarea" readonly v-model="createdOffer"></textarea>
        <a class="button" @click="generateOffer">Generate offer</a>

        <hr>

        <textarea class="textarea" v-model="receivedAnswer"></textarea>
        <a class="button" @click="loadAnswer">Load answer</a>
      </div>
      <div class="column">
        <h2 class="title is-4">Join communication</h2>

        <textarea class="textarea" v-model="receivedOffer"></textarea>
        <textarea class="textarea" readonly v-model="createdAnswer"></textarea>
        <a class="button" @click="loadOffer">Load offer and generate answer</a>
      </div>
    </div>

    <div v-else>

      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <th>{{ task.id }}</th>
            <td>{{ task.text }}</td>
            <td><a class="button" @click="send(task)">Send</a></td>
          </tr>
        </tbody>
      </table>

      <p>

        Remote tasks:

        {{ remoteTasks }}

      </p>

    </div>
  </div>
</template>

<script>
import Peer from 'simple-peer';
import { createNamespacedHelpers } from 'vuex';

const tasks = createNamespacedHelpers('tasks')

export default {
  computed: tasks.mapState(['tasks']),
  data: () => ({
    createdOffer: '',
    createdAnswer: '',
    receivedOffer: '',
    receivedAnswer: '',
    peer: null,
    connect: false,
    remoteTasks: [],
    first: false
  }),
  methods: {
    generateOffer() {
      this.peer = new Peer({ initiator: true, trickle: false });

      this.peer.on('signal', (data) => {
        this.createdOffer = this.createdOffer || JSON.stringify(data);
        console.log('signal', data);
      })

      this.peer.on('connect', () => {
        console.log('connect');
        this.connect = true;
        this.peer.send(JSON.stringify(this.tasks.map(task => task.id)))
      })

      this.peer.on('data', (data) => {
        const message = JSON.parse(new TextDecoder("utf-8").decode(data));
        if (!this.first) {
          this.remoteTasks = message;
          this.first = true;
          return;
        }

        this.$store.dispatch('tasks/add', message);
      })
    },

    loadAnswer() {
      console.log('load answer')
      this.peer.signal(JSON.parse(this.receivedAnswer))
    },

    loadOffer() {
      this.peer = new Peer({ trickle: false });

      this.peer.on('signal', (data) => {
        this.createdAnswer = this.createdAnswer || JSON.stringify(data);
        console.log('signal', data);
      })

      this.peer.on('data', (data) => {
        console.log('data', data)
        const message =JSON.parse(new TextDecoder("utf-8").decode(data));

        if (!this.first) {
          this.remoteTasks = message;
          this.first = true;
          return;
        }

        this.$store.dispatch('tasks/add', message);
      })

      this.peer.on('connect', (data) => {
        this.connect = true;
        this.peer.send(JSON.stringify(this.tasks.map(task => task.id)))
      })

      this.peer.signal(JSON.parse(this.receivedOffer))
    },

    send(task) {
      this.peer.send(JSON.stringify(task))
    }
  }
}
</script>
