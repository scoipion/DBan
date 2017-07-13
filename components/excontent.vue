<template>
	<div class='excontentWrap'>
		<span class='tips' v-text='lips'></span>
		<h4 v-text='txt'></h4>
		<p v-text='content'></p>
		<hr />
		<p>作者：{{arctic}}</p>
		<span class='last'>{{from}}</span>
		<slot name='rightImg'></slot>
		<slot name='topImg'></slot>
	</div>
</template>

<script>
	export default {
		props:['txt','lips','content','arctic','from']
	}
</script>

<style>
	.tips{position: absolute;left: 0;top:0;font-size:14px;border-left:5px solid orangered;padding-left:10px;color:orangered;}
	/*.tips::before{background-color:#0000FF;width:10px;}*/
	h4{margin-bottom:10px;width:230px;overflow:hidden;text-overflow: ellipsis;white-space:nowrap;}
	.excontentWrap{padding:30px 10px 10px;border-bottom:1px solid #eee;position: relative;text-align: left;margin-top: 10px;}
	p{display:inline-block;font-size:14px;color:#666;width:200px;overflow:hidden;text-overflow: ellipsis;white-space:nowrap;}
	hr{width:20px;margin:20px 0;border-width:inherit;}
	.rightside{width:100px;height:100px;position:absolute;right:20px;top:30px;
	.last{margin-left:70px;}
	}
</style>