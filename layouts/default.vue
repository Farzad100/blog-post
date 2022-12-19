<template>
  <div>
    <NavigationTheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <NavigationTheSidenav 
    :show="displaySidenav"
    @close="displaySidenav = false"
    />
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaySidenav: false,
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
