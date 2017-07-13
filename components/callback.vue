<template>
	<div class='callbackWrap'>
		<div class='left'>
			<slot name='Lips'><p v-text='lips'></p></slot>
<!--新发现：为数据请求预留槽口和模块预设可同时进行。-->
<!--数据请求时：模块不加v-text属性，调用时需要写标签样式（参考内建标签样式即可）-->
<!--模块搭建时：预留槽口，调用时模块加v-text属性但不用再写样式（模块也写好）-->
			<slot name='Title'><h3 v-text='titley'><</h3></slot>
			<slot name='desc'></slot>
			<hr>
			<slot name='author'></slot>
		</div>
		<div class="right">
			<slot name='cover_url'></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:['lips','titley']
	}
</script>

<style>
	.callbackWrap{text-align: left;padding:30px 20px 10px;}
	.callbackWrap .left{float:left;width:60%;}
	.callbackWrap .left hr{width:20px;border-width: thin;margin:10px 0;}
	.callbackWrap .right{float:left;width:40%;}
	/*.callbackWrap .right img{height:100px;width:100%;}*/
</style>