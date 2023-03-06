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
                <router-link :to="{ name: 'home' }" :class="this.$route.name === 'home' ? 'active : ''  ">
                    Home</router-link>

            </li>

            <li>
                <router-link :to="{ name: 'about-us' }" :class="this.$route.name === 'about-us' ? 'active : ''  ">
                    Home</router-link>

            </li>

            <li>
                <router-link :to="{ name: 'index' }" :class="this.$route.name === 'index' ? 'active : ''  ">
                    Home</router-link>

            </li>


        </ul>
    </div>
</template>

<style scoped></style>