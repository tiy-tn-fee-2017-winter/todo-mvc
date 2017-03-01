<template lang="html">
  <li v-bind:class="{ completed: todo.completed, editing }">
    <div class="view">
      <input class="toggle" type="checkbox" v-bind:checked="todo.completed" v-on:change="updateCompleted">
      <label v-on:click="toggleEditing">{{todo.title}}</label>
      <button class="destroy" v-on:click="remove"></button>
    </div>
    <form @submit.prevent="save">
      <input class="edit" v-model="title">
    </form>
  </li>
</template>

<script>
import store from '../store';
import { updateTodoTitle, updateTodoCompleted, removeTodo } from '../actions';

export default {
  props: ['todo'],

  data() {
    return {
      title: this.todo.title,
      editing: false
    };
  },

  methods: {
    save() {
      store.dispatch(updateTodoTitle(this.todo._id, this.title));
      this.toggleEditing();
    },

    updateCompleted() {
      store.dispatch(updateTodoCompleted(this.todo._id, !this.completed));
    },

    toggleEditing() {
      this.editing = !this.editing;
    },

    remove() {
      store.dispatch(removeTodo(this.todo._id));
    }
  },
};
</script>
