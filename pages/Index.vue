<template>
	<div>
		<Parent></Parent>
	</div>
</template>

<script>

import Parent from '../components/parent'

export default {
	data: function(){
		return {
			msg: 'hello'
		}
	},
	components: {
		Parent
	}
}
</script>

<style>
	h1 {color:blue;}
	ul,li{list-style: none;}
	*{
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
</style>