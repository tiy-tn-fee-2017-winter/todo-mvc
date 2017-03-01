<template lang="html">
  <li v-bind:class="{ completed: task.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" v-on:change="$emit('toggle', task._id)" v-bind:checked="task.completed">
      <label>{{ task.description }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>
</template>

<script>
export default {
  props: ['task'],
};
</script>
