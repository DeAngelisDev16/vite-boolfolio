<script >
import axios from 'axios';


export default {
    name: 'AppMain',
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
    <h1>Welcome back vue</h1>
</template>

<style></style>