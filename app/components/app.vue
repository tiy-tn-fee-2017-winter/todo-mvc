<template lang="html">
  <div class="">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <form v-on:submit.prevent="addTask">
          <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="newTaskDescription">
        </form>
      </header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <section class="main" v-if="tasks.length > 0">
        <input class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <!-- These are here just to show the structure of the list items -->
          <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
          <task-item v-for="task in tasks"
            v-on:toggle="toggle"
            v-bind:task="task"></task-item>
        </ul>
      </section>
      <!-- This footer should hidden by default and shown when there are todos -->
      <footer class="footer" v-if="tasks.length > 0">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>0</strong> item left</span>
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
        <button class="clear-completed">Clear completed</button>
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
import { createTask, toggleTask, findAllTask } from '../actions';

import TaskItem from './task-item.vue';

export default {
  components: {
    TaskItem,
  },

  created() {
    store.dispatch(findAllTask());
  },

  data() {
    return {
      newTaskDescription: '',
      tasks: this.$select('tasks'),
    };
  },

  methods: {
    addTask() {
      store.dispatch(createTask(this.newTaskDescription));

      this.newTaskDescription = '';
    },

    toggle(id) {
      store.dispatch(toggleTask(id));
    }
  },
};
</script>
