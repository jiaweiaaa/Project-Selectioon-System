<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
    export default {
        name: 'App',
        provide () {                                                 
            return {
                reload: this.reload                                              
            }
        },
        data() {
            return{
                isRouterAlive: true                    
            }
        },
        methods: {
            reload () {
                this.isRouterAlive = false;            
                this.$nextTick(function () {
                    this.isRouterAlive = true;         
                }) 
            }
        }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
