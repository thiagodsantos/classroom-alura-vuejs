<template>
  <div class="corpo">
    <menu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    'menu-menu': Menu
  },

  data() {
    return {
      routes
    };
  }
};
</script>

<style>
.corpo {
  font-family: "Courier New", Courier, monospace;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active {
  transition: opacity 0.4s;
}
</style>