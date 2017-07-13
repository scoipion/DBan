<template>
	<div class="guanzhuWrap">
			<!--<img src='../assets/images/ic_user_info_gender.png'>
			<h4>发现有趣的人</h4><br />
			<span>关注他们，发现更大的世界</span>-->
			<div class='box'>
				<img class='close' src='../assets/images/ic_close_status_recommend.png'>
				<div>
					<h3>{{userid}}</h3>
					<!--<img src='../assets/images/avatar_male_70.png'>-->
					<span>{{mans}}人关注</span>
					<p>{{msg}}</p>
					<slot name='photo'></slot>
					<p class='zan'>{{good}}<span>{{news}}</span></p>
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		props:['photo','good','news','msg','mans','userid']
	}
</script>

<style>
	.guanzhuWrap{
		background-color:#EEEEEE;
		position:relative;
		padding:20px 10px;
		text-align: left;
	}
	/*.guanzhuWrap img{width:100px;margin-left:20px;float:left;}*/
	/*.guanzhuWrap h4{display: inline-block;width:auto;margin:30px 0 0 20px;}*/
	/*.guanzhuWrap br+span{color:#808080;margin-left:20px;}*/
	.box{background-color:#fff;border-radius: 5px;padding:20px 10px 10px;border:1px solid transparent;}
	.guanzhuWrap img+div{padding-left:88px;background-image: url('../assets/images/avatar_male_70.png');background-repeat: no-repeat;background-position: 0 0;background-size: 70px;}
	.guanzhuWrap div>h3{
		background-image:url("../assets/images/ic_add_tag.png");
		background-repeat: no-repeat;
		background-position: 95% 0;
		background-size:20px;
	}
	.guanzhuWrap span+p{margin:5px 0;}
	.zan{background-image:url('../assets/images/ic_liked.png');background-repeat: no-repeat;background-position:0 center;background-size:20px;height:30px;line-height:30px;padding-left:20px;}
	.zan>span{background-image:url('../assets/images/ic_group_comment_0.png');background-repeat: no-repeat;background-position:0 center;background-size:20px;padding-left:20px;display:inline-block;font-size:14px;}
	.guanzhuWrap .close{position:absolute;right:14px;top:23px;width:25px;}
</style>