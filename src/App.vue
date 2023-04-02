<template>
  <div id="app">
    <ul class="nav nav-underline border ps-2">
      <li class="nav-item">
        <router-link
          to="/"
          class="text-decoration-none text-info-emphasis fs-4"
        >
          Todos </router-link
        >|
      </li>
      <li class="nav-item">
        <router-link
          to="/todos-done"
          class="text-decoration-none text-info-emphasis fs-4"
        >
          Done </router-link
        >|
      </li>
      <li class="nav-item">
        <router-link
          to="/todos-left"
          class="text-decoration-none text-info-emphasis fs-4"
        >
          Left
        </router-link>
      </li>
    </ul>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
</style>
