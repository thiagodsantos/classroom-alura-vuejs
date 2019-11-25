<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default {
  data () {
    return {
      titulo: 'Galeria',
      foto: {
        url: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg',
        titulo: 'Floresta'
      }
    }
  }
}
</script>

<style>
</style>
