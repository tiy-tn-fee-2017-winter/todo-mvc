<template lang="html">
  <div class="">
    <ul>
      <li><button v-on:click="increment">{{ number }}</button></li>
    </ul>
  </div>
</template>

<script>
export default {
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
