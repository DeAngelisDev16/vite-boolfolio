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
        <ul class="d-flex">
            <li class="p-2">
                <router-link :to="{ name: 'home' }" :class="this.$route.name === 'home' ? 'active' : ''">
                    Home</router-link>

            </li>

            <li class="p-2">
                <router-link :to="{ name: 'about-us' }" :class="this.$route.name === 'about-us' ? 'active' : ''">
                    about-us</router-link>

            </li>

            <li class="p-2">
                <router-link :to="{ name: 'index' }" :class="this.$route.name === 'index' ? 'active' : ''">
                    index</router-link>

            </li>


        </ul>
    </div>
</template>

<style scoped lang="scss">
ul {
    list-style: none;
}

li a {
    text-decoration: none;
    list-style: none;
    color: black;
}
</style>