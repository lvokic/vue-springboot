<template>
  <body>
    <div id="app">
      <router-view />
    </div>
  </body>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
::-webkit-scrollbar {
  width: 0px;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
