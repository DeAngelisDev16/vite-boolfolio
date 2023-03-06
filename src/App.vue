<script >
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppMain,
    AppHeader

  }
}
</script>

<template>
  <AppMain />
  <AppHeader />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
