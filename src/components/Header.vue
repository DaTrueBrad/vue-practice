<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <header>Task List Demo</header>
  <div>
    <h1>Brady's Tasks</h1>
    <h4>Welcome! This is my test application to learn how to use Vue. Currently, it seesm very similar to React, just a few key differences.</h4>
    <nav>
      <RouterLink to="/" active-class="active">Create Task</RouterLink>
      <RouterLink to="/tasks" active-class="active">All Tasks</RouterLink>
      <RouterLink to="/Axios" active-class="active">HTTP Example</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 8px
  }

  h4 {
    text-align: center;
  }

  .active {
    color: grey;
  }

  .active:hover {
    background-color: transparent ;
    cursor:default;
  }
</style>
