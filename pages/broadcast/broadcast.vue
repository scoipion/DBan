<template>
	<div class="broadcastWrap">
		<MHeader col='#fff'>
			<span class='title'>推荐广播</span>
			<img class='search_green' slot='leftImg' src='../../assets/images/ic_status_search_user.png'>
			<img class='chat_green' slot='rightImg' src='../../assets/images/ic_chat_green.png'>
		</MHeader>


		<div class='trouble'>
			<img src='../../assets/images/ic_status_anonymous_header.png'>
			<h4>发现有趣的人</h4><br />
			<span>关注他们，发现更大的世界</span>
		</div>
		<GuanZhu good='64' news='12' msg='今天上午签的' mans='7641' userid='陆大鹏Hans'>
			<img class='pt' slot='photo' src="../../assets/images/167121932.jpg">
		</GuanZhu>
		<GuanZhu good='9' news='6' msg='今天上午签的' mans='6955' userid='格里高尔'>
			<img class='pt' slot='photo' src="../../assets/images/bg_filmawards_badge.png">
		</GuanZhu>
		<GuanZhu good='6' news='3' msg='今天上午签的' mans='90' userid='君子之至'>
			<img class='pt' slot='photo' src="../../assets/images/167121932.jpg">
		</GuanZhu>
	</div>
</template>

<script>
import MHeader from '../../components/header'
import GuanZhu from '../../components/guanzhu'

export default {
	components: {
		MHeader,
		GuanZhu
	}
}
</script>
<style>
.broadcastWrap{
	background-color: #eee;
	margin-bottom:72px;
	}
.broadcastWrap img{width:0.3rem;}
.broadcastWrap .pt{
	width:100%;
	max-width:500px;
	margin:0;
}
.trouble{background-color:#eee;height:1.10rem;padding-top:20px;text-align: left;}
.trouble h4{display: inline-block;width:auto;margin:30px 0 0 20px;}
.trouble br+span{color:#808080;margin-left:20px;}
.trouble img{width:100px;margin-left:20px;float:left;}
</style>