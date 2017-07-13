<template>
	<div class='mineWrap'>
		<MHeader>
			<span class='title'>我的</span>
			<img class='chat_green' slot='rightImg' src='../../assets/images/ic_settings.png'>
		</MHeader>
		<div class='mine_top'>
			<img src='../../assets/images/avatar_male_30.png'>
			<button type="button">登录/注册</button>
		</div>
		<div class='bel'>
			<p>提醒</p>
			<hr>
			<span>暂无新提醒</span>
		</div>
		<MineClass name='喜欢' name1='日记' name2='相册' name3='我的广播'>
			<img class='mp' slot='img' src='../../assets/images/ic_my_likes.png'>
			<img class='mp1' slot='img1' src='../../assets/images/ic_my_note.png'>
			<img class='mp2' slot='img2' src='../../assets/images/ic_my_album.png'>
			<img class='mp3' slot='img3' src='../../assets/images/ic_my_status.png'>
		</MineClass>
		<MineClass name='电影电视' name1='读书' name2='音乐' name3='同城活动'>
			<img class='mp' slot='img' src='../../assets/images/ic_my_movies_tvs.png'>
			<img class='mp1' slot='img1' src='../../assets/images/ic_my_books.png'>
			<img class='mp2' slot='img2' src='../../assets/images/ic_my_music.png'>
			<img class='mp3' slot='img3' src='../../assets/images/ic_my_events.png'>
		</MineClass>
		<MineClass name='豆瓣时间' name1='豆列' name2='订单' name3='钱包'>
			<img class='mp' slot='img' src='../../assets/images/ic_my_likes.png'>
			<img class='mp1' slot='img1' src='../../assets/images/ic_my_doulist.png'>
			<img class='mp2' slot='img2' src='../../assets/images/ic_my_orders.png'>
			<img class='mp3 wallet' slot='img3' src='../../assets/images/ic_my_wallet.png'>
		</MineClass>
	</div>

</template>

<script>
import MHeader from '../../components/header'
import MineClass from '../../components/mineclass'

export default {
	components: {
		MHeader,
		MineClass
	}
}
</script>
<style>
	.mineWrap{background-color:#666;text-align:center;height:594px;margin-bottom:72px;}
	.mine_top{background-color:green;height:100px;position:relative;margin-bottom:10px;}
	.mine_top img{width:75px;left:20px;top:15px;position:absolute;}
	button{border:1px solid #fff;border-radius: 5px;background-color:green;color:#fff;width:160px;height:40px;line-height: 40px;margin:30px 30px 0 100px;}
	.bel{text-align: left;padding-left:10px;background-color:#fff;margin-bottom:10px;}
	.bel p{background-image: url('../../assets/images/ic_mine_notification.png');background-repeat: no-repeat;background-position: 0 10px;background-size:20px;width:auto;padding:10px 0 0 40px;}
	.bel hr{border:1px solid #eee;border-width: thin;width:100%;}
	.bel hr+span{margin-left:160px;}
	/*.mp,.mp1,.mp2,.mp3{width:30px;display: block;}*/
	.mineWrap .mp{}
	.mineWrap .mp1{}
	.mineWrap .mp2{}
	.mineWrap .mp3{text-align: center;}
	.mineclassWrap ul{
		display:flex;
		flex-flow:row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	.mineclassWrap li{
		display: flex;
		flex-flow: column nowrap;
		align-items: center;

	}
	.wallet{
		width:90px;
	}

</style>