<template>
	<div class="cityWrap">
		<div class="ctmenu">
			<ul>
				<li>当前城市：<span>上海</span><b>></b></li>
				<li class='bdleft'>类型 时间 地点<b>></b></li>
			</ul>
		</div>
		<div class="where">
			<img src="../assets/images/21-30-01-file-1496372840.jpg">
				<h2>周末去哪儿.上海</h2>
				<span>每周五更新，为豆友们推荐各类本地生活资讯，吃喝玩乐享不停</span>
		</div>
		<Xbox30 title='热门活动' more='更多'></Xbox30>
		<Xbox30 title='官方售票' more='更多'>
			<img slot='Urls' src='../assets/images/795760329.jpg'>
			<img slot='Urls1' src='../assets/images/795760329.jpg'>
			<img slot='Urls2' src='../assets/images/795760329.jpg'>
			<img slot='Urls3' src='../assets/images/795760329.jpg'>
		</Xbox30>
		<div class='sport'></div>
	</div>

</template>

<script>
	import Xbox30 from '../components/xbox30'
	export default {
		components:{
			Xbox30
		}
	}
</script>

<style>
	html{background-color:#eee;}
	.ctmenu{background-color:#fff;height:50px;line-height: 50px;text-align: left;}
	.ctmenu ul{margin:10px 0 10px;list-style: none;}
	.ctmenu li{width:48%;float:left;text-indent:1em;padding-right: 5px;}
	.ctmenu li span{color:lightgreen;font-size:16px;}
	.ctmenu li b{padding:0;float: right;line-height: 50px;}
	.bdleft{border-left:1px solid #eee;}
	.where{background-color:#fff;text-align:left;margin: 10px 0;}
	.where img{
		width:100%;
	}
	.where h2,.where span{padding-left: 10px;}
	/*底部垫高-让页面显示完全*/
	.sport{height:50px;}
	/*.cityWrap{text-align: left;padding:20px 10px;position: relative;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;background: #fff;}*/
	/*.cityWrap h4{display: inline-block;margin-bottom: 20px;font-weight:normal;margin-left:10px;}
	.cityWrap h4+span{float:right;margin-right:20px;}
	.cityWrap p{display: block;color:black;}
	.bookWrap ul{overflow: hidden;}
	.cityWrap li{border:none;display: inline-block;width:100px;padding:0 9px;}
	hr+span{position:absolute;left:20px;top:59px;background-color:#fff;}
	.cityWrap .active{color:limegreen;background:transparent;}*/
	.cityWrap{
		margin-bottom:72px;
	}
	.cityWrap .stars{background:url('../assets/images/rating_star_card_on.png') repeat-x 0 0/18px;width:82px;display: none;}
	.stars span{margin-left:94px;}
</style>