<template lang="html">
  <div class="">
    <ul>
      <counter-button
        v-for="(z, index) in counters"
        v-bind:number="z"
        v-on:change="increment(index)"></counter-button>
    </ul>

    <button v-on:click="addCounter">Add Counter</button>
  </div>
</template>

<script>
import store from '../store';
import CounterButton from './counter-button.vue';

export default {
  // What custom elements/components can we use in our template
  components: {
    CounterButton,
  },

  data() {
    return {
      // The `counters` property of my component
      // will be updated any time `counters` changes
      // in the Redux store
      counters: this.$select('counters'),
    };
  },

  methods: {
    increment(index) {
      store.dispatch({
        type: 'COUNTER@INCREMENT',
        index,
      });
    },

    addCounter() {
      store.dispatch({
        type: 'COUNTER@ADD_COUNTER',
      });
    },
  },
};
</script>
