<script >



export default {
    name: 'AppHeader',

    data() {
        return {


        }
    },

}


</script>

<template>
    <div class="container-fluid">
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">
                    Home</router-link>

            </li>

            <li>
                <router-link :to="{ name: 'AboutUs' }">
                    About Us</router-link>

            </li>

            <li>
                <router-link :to="{ name: 'ProjectIndex' }">
                    Index</router-link>

            </li>


        </ul>
    </div>
</template>

<style scoped></style>