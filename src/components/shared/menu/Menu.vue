<template>
  <nav>
    <ul>
      <li v-for="route in routes" v-bind:key="route.path">
        <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "./../../../routes";

export default {
  data() {
    return {
      routes: routes.filter(route => route.menu === true)
    };
  }
};
</script>

<style>
</style>