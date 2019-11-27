<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtrar parte do titulo">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data() {
    return {
      titulo: 'Galeria',
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if (!this.filtro) {
        return this.fotos;
      }
      let exp = new RegExp(this.filtro.trim(), 'i');
      return this.fotos.filter(foto => exp.test(foto.titulo));
    }
  },

  async created() {
    let fotos  = await this.$http.get('http://localhost:3009/v1/fotos');
    this.fotos = await fotos.json();
  }
}
</script>

<style>
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

  .filtro {
    display: block;
    width: 100%;
  }
</style>
