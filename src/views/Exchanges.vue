<template>
  <div>
    <h1 class="title">Exchanges</h1>

    <div class="columns">
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
  </div>
</template>

<script>
import Peer from 'simple-peer';

export default {
  data: () => ({
    createdOffer: '',
    createdAnswer: '',
    receivedOffer: '',
    receivedAnswer: '',
    peer: null
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
        this.peer.send('message to send')
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
      })

      this.peer.signal(JSON.parse(this.receivedOffer))
    }
  }
}
</script>
