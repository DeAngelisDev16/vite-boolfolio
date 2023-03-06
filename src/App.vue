<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import ProjectIndex from './pages/ProjectIndex.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    ProjectIndex


  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <ProjectIndex />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
