<template>
  <q-card bordered
  class="q-pa-md">
  <h4 v-show="cont%2 == 0">{{ cont }}</h4>
  <h2>{{ mensagem }}</h2>
  data: {{ todo.data }}<br/>
  titulo: <h3>{{ todo.titulo }}</h3><br/>
  <q-btn label="botão" outline class="bg-green"
  @click="quandoClicar"/><br/>
  <input v-model="mensagem" type="text" class="q-pa-md"/><br/>
  <input v-model="mensagem" type="text" class="q-pa-md"/><br/>

</q-card>
</template>
<script>
export default {
  name: "MeuCard",
  props: {
    texto: String,
    init: Number,
    timeout: Number,
    todo: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      mensagem: "bem vindo ao Vue.js App",
      cont:1
    };
  },
  created() {
    this.cont = this.init;
    this.mensagem = this.texto;
    setInterval(() => {
      this.cont++;
    }, this.timeout);
  },
  methods: {
    quandoClicar() {
      alert(this.todo.titulo);
    },
  },
}
</script>
