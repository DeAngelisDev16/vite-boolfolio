<script >
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';


export default {
    name: 'AppMain',
    components: {
        ProjectCard
    },
    data() {
        return {

            projectsList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',

        }
    },
    methods: {
        getProjects() {
            const self = this;

            axios.get(this.apiUrl, {
                params: {

                }
            })
                .then(function (response) {
                    console.log(response.data.results.data);
                    self.projectsList = response.data.results.data;


                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },




    },
    created() {
        this.getProjects()

    }

}

</script>

<template>
    <div class="container">
        <div class="row g-3">
            <div class="col-4">

                <ProjectCard v-for="project in projectsList" :projectTitle="project.title"
                    :projectDescription="project.description" />
            </div>



        </div>
    </div>
</template>

<style scoped></style>