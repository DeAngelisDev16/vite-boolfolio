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
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
    </div>
</template>


 





<style scoped></style>




