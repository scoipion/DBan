<template>
	<div class='mineclassWrap'>
		<ul>
			<li><slot name='img'></slot><i v-text='name'></i></li>
			<li><slot name='img1'></slot><i v-text='name1'></i></li>
			<li><slot name='img2'></slot><i v-text='name2'></i></li>
			<li><slot name='img3'></slot><i v-text='name3'></i></li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['name','name1','name2','name3']
	}
</script>

<style scoped>
	.mineclassWrap{background-color:#fff;text-align: center;vertical-align: middle;margin-bottom:1px;}
	.mineclassWrap ul{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		align-items: center;
		/*padding:20px 10px 20px 30px;*/

	}
	.mineclassWrap i{font-style: normal;}
</style>