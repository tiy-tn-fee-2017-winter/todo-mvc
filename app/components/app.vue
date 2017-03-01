<template lang="html">
  <div class="">
    <ul>
      <counter-button
        v-bind:number="number"
        v-on:change="increment"></counter-button>
    </ul>
  </div>
</template>

<script>
import CounterButton from './counter-button.vue';

export default {
  // What custom elements/components can we use in our template
  components: {
    CounterButton,
  },
  data() {
    return {
      number: 0,
    };
  },

  methods: {
    increment() {
      this.number += 1;
    }
  },
};
</script>
