<template>
  <q-page class="flex flex-center">
    <cardAluno v-for="aln in alunos "
               v-bind:key="aln"
               :aluno="aln"/>

    <ul>
      <li v-for="aln in alunos"
          v-bind:key="aln.id">{{ aln.nome }}</li>
    </ul>
    <q-card>
      <q-card-section>
        <q-card-title>{{ indice }}</q-card-title>
        <q-card-main>
          <cardAluno v-if="alunos.length > 0"
          :aluno="alunos[indice]"/>
        </q-card-main>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Anterior"
               @click="indice = indice - 1"
               :disable="indice == 0"/>
        <q-btn flat color="primary" label="Próximo"
               @click="indice = indice + 1"
               :disable="indice == alunos.length - 1"/>
        </q-card-actions>
    </q-card>
    <!--
    <MeuCard texto="da sexta"
    :todo="todoObj" init="3000" timeout="500"/>
    <MeuCard texto="o card 2" :init="1000" :timeout="1000"
    :todo="todo2"/>
    -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import services from '../services';
import cardAluno from 'src/components/cardAluno.vue';
//import MeuCard from '../components/MeuCard.vue';
export default defineComponent(
  {
    name: 'IndexPage',
    components: {cardAluno}, //{MeuCard},
    data() {
        return {
            indice: 0,
            alunos: [],
            msg: 'bem vindo ao Vue.js App',
            todoObj: Object,
            todo2: Object
        };
    },
    created() {
      services.getAlunos((dados)=>{
        console.log("no indexPage", dados);
        this.alunos = dados;
      });
      this.todoObj = {
                data: '01/01/2021',
                titulo: 'meu todo',
            };
      this.todo2 = {
          data: '01/01/2021',
          titulo: 'este é o todo 2',
      };
        console.log('IndexPage created');
    },

}
)
</script>
