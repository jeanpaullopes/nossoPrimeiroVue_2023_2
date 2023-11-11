<template>
id: {{aluno.id}}<br>
nome: {{aluno.nome}}<br>
</template>
<script>
export default {
    name: 'CardAluno',
    props: {
        aluno: Object
    },
    data() {
        return {
        };
    },
    created() {

    },
}
</script>
