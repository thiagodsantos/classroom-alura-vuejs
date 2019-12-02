<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Filtrar parte do titulo"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo" />
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: 'Galeria',
      fotos: [],
      filtro: '',
      mensagem: ''
    };
  },

  computed: {
    fotosComFiltro() {
      if (!this.filtro) {
        return this.fotos;
      }
      let exp = new RegExp(this.filtro.trim(), "i");
      return this.fotos.filter(foto => exp.test(foto.titulo));
    }
  },

  methods: {
    async remove(foto) {
      try {
        await this.service.apaga(foto._id);
        let index = this.fotos.indexOf(foto);
        this.fotos.splice(index, 1);
        this.mensagem = 'Foto removida';
      } catch (error) {
        this.mensagem = 'Erro ao remover a foto';
        throw error;
      }
    }
  },

  async created() {
    this.service = new FotoService(this.$resource);
    this.fotos   = await this.service.lista();
  }
};
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
