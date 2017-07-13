
<template>
	<div class='bookWrap'>
		<h4 v-text='title'></h4>
		<span class='active'>更多></span>
		<span v-text='data'></span>
		<ul>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>封闭式车库</p>
				<p class='stars'><span>8.8</span></p>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>日本新中产阶级</p>
				<p class='stars'><span>8.8</span></p>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>我遇见人类</p>
				<p class='stars'><span>8.8</span></p>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>畅销作家写作</p>
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
	.bookWrap{text-align: left;padding:20px 10px;position: relative;}
	.bookWrap h4{display: inline-block;margin-bottom: 20px;font-weight:normal;margin-left:10px;}
	.bookWrap h4+span{float:right;margin-right:20px;}
	.bookWrap p{display: block;color:black;}
	.bookWrap ul{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
	.bookWrap li{
		flex: 1;
		border:none;
		display: inline-block;
		padding:0 9px;
	}
	.bookWrap li img{
		width:110px;
	}
	.bookWrap li img+p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	hr+span{position:absolute;left:20px;top:59px;background-color:#fff;}
	.bookWrap .active{
		color:limegreen;
		background:transparent;
		float: right;
	}
	.stars{background:url('../assets/images/rating_star_card_on.png') repeat-x 0 0/18px;width:82px;}
	.stars span{margin-left:94px;}
</style>
