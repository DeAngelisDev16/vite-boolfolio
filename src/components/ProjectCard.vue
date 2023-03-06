<script >



export default {
    name: 'ProjectCard',

    props: [
        'projectTitle',
        'projectDescription'

    ],
    data() {
        return {


        }
    },
    methods: {

    },

}
</script>

<template>
    <div class="project-element">
        <h3>{{ projectTitle }}</h3>
        <p>{{ projectDescription }}</p>

    </div>
</template>


 





<style scoped></style>




