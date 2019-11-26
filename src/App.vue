<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";

export default {
  components: {
    'meu-painel': Painel
  },

  data() {
    return {
      titulo: 'Galeria',
      fotos: []
    }
  },

  async created() {
    let fotos  = await this.$http.get('http://localhost:3000/v1/fotos');
    this.fotos = await fotos.json();
  }
}
</script>

<style>
  .corpo {
    font-family: 'Courier New', Courier, monospace;
    width: 96%;
    margin: 0 auto;
  }
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style: none;
  }
  .lista-fotos-item {
    display: inline-block;
  }
     .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }
  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  .imagem-responsiva {
    width: 100%;
  }
</style>
