<template lang="html">
  <div class="">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <form v-on:submit.prevent="addTodo">
          <input class="new-todo" v-model="todoTitle" placeholder="What needs to be done?" autofocus>
        </form>
      </header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <section class="main" v-if="todos.length">
        <input class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <!-- These are here just to show the structure of the list items -->
          <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
          <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
        </ul>
      </section>
      <!-- This footer should hidden by default and shown when there are todos -->
      <footer class="footer" v-if="todos.length">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{todos.length}}</strong> {{todos.length > 1 ? "items" : "item"}} left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
          <li>
            <a class="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <div class="clear-size">
          <button class="clear-completed" v-on:click="removeCompleted">Clear completed</button>
        </div>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
      <!-- Change this out with your name and url ↓ -->
      <p>Created by <a href="http://todomvc.com">you</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
import store from '../store';
import { createTodo, findAll, removeTodoAllCompleted } from '../actions';

import TodoItem from './todo-item.vue';

export default {
  components: {
    TodoItem,
  },

  data() {
    return {
      todoTitle: '',
      todos: this.$select('todos'),
    };
  },

  created() {
    store.dispatch(findAll());
  },

  methods: {
    addTodo() {
      store.dispatch(createTodo(this.todoTitle));
      this.todoTitle = '';
    },

    removeCompleted() {
      store.dispatch(removeTodoAllCompleted());
    }
  },
};
</script>
