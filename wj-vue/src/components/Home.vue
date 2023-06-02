<template>
  <body>
    <div>
      <nav-menu />
      <router-view />
    </div>
  </body>
</template>
 
<script>
import NavMenu from './common/NavMenu'
export default {
  name: 'Home',
  components: { NavMenu }
}
</script>
 
<style scoped>
  body {
    margin: 0px;
    padding: 0px;
  }
</style>
  
  