<template>
  <q-page class="flex flex-center">
    <MeuCard texto="da sexta"
    :todo="todoObj" init="3000" timeout="500"/>
    <MeuCard texto="o card 2" :init="1000" :timeout="1000"
    :todo="todo2"/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MeuCard from '../components/MeuCard.vue';
export default defineComponent(
  {
    name: 'IndexPage',
    components: {MeuCard},
    data() {
        return {
            msg: 'bem vindo ao Vue.js App',
            todoObj: Object,
            todo2: Object
        };
    },
    created() {
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
