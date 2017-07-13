
<template>
	<div class='tvcomWrap'>
		<h4 v-text='title'></h4>
		<span class='active'>更多></span>
		<span v-text='data'></span>
		<ul>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>楚乔传</p>
				<p class='stars'><span>8.8</span></p>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>小情人</p>
				<p class='stars'><span>8.8</span></p>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>我女朋友的男朋友</p>
				<p class='stars'><span>8.8</span></p>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>废材兄弟5：泰爽</p>
				<p class='stars'><span>8.8</span></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['name','title','mans','data']
	}
</script>

<style scoped>
	.tvcomWrap{text-align: left;padding:20px 10px;position: relative;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	.tvcomWrap h4{display: inline-block;margin-bottom: 20px;font-weight:normal;margin-left:10px;}
	.tvcomWrap h4+span{float:right;margin-right:20px;}
	.tvcomWrap p{display: block;color:black;}
	.tvcomWrap ul{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
	.tvcomWrap li{
		flex: 1;
		border:none;
		display: inline-block;
		width:100px;
		margin:0 9px;
	}
	.tvcomWrap li img{
		width:110px;
	}
	.tvcomWrap img+p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	hr+span{position:absolute;left:20px;top:59px;background-color:#fff;}
	.tvcomWrap .active{
		color:limegreen;
		background:transparent;
		float: right;
		}
	.stars{background:url('../assets/images/rating_star_card_on.png') repeat-x 0 0/18px;width:82px;}
	.stars span{margin-left:94px;}
</style>
