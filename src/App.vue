<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="route in routes" v-bind:key="route.path">
          <router-link
            :to="route.path ? route.path : '/'"
          >
            {{ route.titulo }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { routes } from "./routes";
export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
  .corpo {
    font-family: 'Courier New', Courier, monospace;
    width: 96%;
    margin: 0 auto;
  }
</style>