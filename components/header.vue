<template>
	<div class='headerWrap' :style='{background: col}'>
		<slot></slot>
		<slot name='leftImg'></slot>
		<slot name='rightImg'></slot>
	</div>
</template>

<script>
export default {
	props: {
		col: {
			default:'#f7f7f7'
		}
	}
}
</script>

<style>
	.headerWrap {width: 100%; height: 48px; line-height: 48px; font-weight: bold;position:relative;}
	.title {font-size: 16px; color: #666;}
	.headerWrap img{width:17px;position:absolute;}
	.headerWrap .left{left:15px;top:15px;}
	.headerWrap .right{right:75px;top:15px;}
	.headerWrap .chat{right:20px;top:12px;width:25px;}
	.headerWrap input{width:80%;border-radius: 5px;height:30px;border:none;line-height:30px;position:absolute;left:10px;top:10px;text-indent:3em;}
	.headerWrap .chat_green{width:30px;position:absolute;right:20px;top:10px;}
	.headerWrap .search_green{width:30px;position:absolute;right:80px;top:10px;}
	.headerWrap a{display: inline-block;margin:5px 10px;}
</style>