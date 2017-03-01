<template lang="html">
  <li>
    <button v-on:click="$emit('change')">{{ number }}</button>
  </li>
</template>

<script>
export default {
  props: ['number'],

  methods: {

  },
};
</script>
