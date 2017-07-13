<template>
	<div class='filmWrap'>
		<ul>
			<li>
				<img src='../assets/images/media.jpg'>
				<h5>神奇女侠</h5>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<span v-text='5'></span>
			</li>
			<li>
				<img src='../assets/images/media.jpg'>
				<h5>神奇女侠</h5>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<span v-text='5'></span>
			</li>
			<li>
				<img src='../assets/images/media.jpg'>
				<h5>神奇女侠</h5>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<span v-text='5'></span>
			</li>
			<li>
				<img src='../assets/images/media.jpg'>
				<h5>神奇女侠</h5>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<span v-text='5'></span>
			</li>
			<li>
				<img src='../assets/images/media.jpg'>
				<h5>神奇女侠</h5>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<img class='star' src='../assets/images/rating_star_card_on.png'>
				<span v-text='5'></span>
			</li>
		</ul>
	</div>
</template>
<template>
	<div class='f_moveWrap'>
		<Move title='影院热映' data=''></Move>
		<Move title='院线即将上映' data='6.09'></Move>
		<Move title='院线即将上映' data='6.09'></Move>
		<Move title='院线即将上映' data='6.09'></Move>
		<Move title='院线即将上映' data='6.09'></Move>
	</div>
</template>
<!--<template>
	<div>
		<TalAbout></TalAbout>
	</div>
</template>-->
<script>
	import TalAbout from '../components/talabout'
	import Move from '../components/move'
	export default {
			components:{
				TalAbout,
				Move
			}
	}
</script>
<style>
	.filmWrap{
		width:375px;
		height:160px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.filmWrap li{
		border:none;
		margin:10px 5px;
		padding:0;
	}
	.filmWrap li img{
		/*width:110px;*/

	}
	.star{width:15px;
		float:left;
		margin-left:2px;}
	/*.f_moveWrap img{height:130px;}*/
	.f_moveWrap{
		margin-bottom:72px;
}
</style>