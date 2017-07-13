<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'

export default {
  name: 'app',
  components: {
    Tabbar
  },
  created: function(){
    this.$router.push('/');
  }
}
</script>

<style>
ul,li,input,img{
	border:none;
	list-style: none;
}
a{color:#999;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
	*{
		box-sizing: border-box;
		margin:0;
		padding:0;
	}

</style>
