<template>
	<div>
		<h1>{{ msg }}</h1>
		<Child :change='parentChange'></Child>
	</div>
</template>

<script>
import Child from './child'

export default {
	components: {Child},
	data: function() {
		return {
			msg: 'Update your data here.'
		}
	},
	methods: {
		parentChange: function(num) {
			this.msg = 'Update your data here. Page : ' + num;
		}
	}
}

</script>