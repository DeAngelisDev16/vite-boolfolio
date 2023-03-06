<script >
import AppHeader from './components/AppHeader.vue';
import ProjectIndex from './pages/ProjectIndex.vue';
import AppMain from './components/AppMain.vue';

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
  <!--  <ProjectIndex /> -->
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
