<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos" v-bind:key="foto.id">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titulo: 'Galeria',
      fotos: [
        {
          id: 1,
          url: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg',
          titulo: 'Floresta'
        },
        {
          id: 2,
          url: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
          titulo: 'Island'
        }
      ]
    }
  }
}
</script>

<style>
</style>
