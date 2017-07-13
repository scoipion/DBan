<template>
	<div class='homeWrap'>
		<MHeader col='#42c055'>
			<!--<span class='title'>首页</span>-->
			<input placeholder="影音 图书 唱片 小组 舞台剧等">
				<img class='left' src='../../assets/images/ic_search_gray.png'>
				<img class='right' src='../../assets/images/ic_scan_gray.png'>
			</input>
			<img class='chat' src="../../assets/images/ic_chat_white.png" @click='login(bol)'>
		</MHeader>
		<Banner :autoplay=1000 swiperid='swiped001'>
			<div class='swiper-slide' slot='swiper-con'>
				<img src="../../assets/images/banner/01.jpg">
			</div>
			<div class='swiper-slide' slot='swiper-con'>
				<img src="../../assets/images/banner/02.jpg">
			</div>
			<div class='swiper-slide' slot='swiper-con'>
				<img src="../../assets/images/banner/03.jpg">
			</div>
		</Banner>
		<div class='callback'>
			<CallBack v-for="item in arr">
				<!--<p slot='Lips'></p>-->
				<h3 slot='Title'>{{item.title}}</h3>
				<span slot='desc'>{{item.target.desc}}</span>
				<hr/>
				<p slot='author'>作者：{{item.target.author.name}}</p>
				<img slot='cover_url' :src="item.target.cover_url">
			</CallBack>
		</div>
		<!--<ExContent txt='《神奇女侠》官方指定辅导手册' lips='热点' content='为你带来DC目前口碑最好一部的无剧透前瞻，只为观影更有趣' arctic='女神的秋裤' from=''>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>-->
		<!--<ExContent txt='一周豆瓣热门影视！《超感猎杀》不再续订，你还舍' lips='' content='《加勒比海盗5》夺得本周电影榜冠军。' arctic='豆瓣' from='来自栏目：一周热门影视'>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>
		<ExContent txt='周末去哪：上海|万万没想到，哆啦A梦的一百件道具' lips='周末' content='明媚的夏日在耀眼阳光的催促下终于到来！轻薄的夏装穿起来，夹脚凉快' arctic='豆瓣同城' from='来自栏目：周末去哪'>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>
		<ExContent txt='一周豆瓣热门影视！《超感猎杀》不再续订，你还舍' lips='' content='《加勒比海盗5》夺得本周电影榜冠军。' arctic='豆瓣' from='来自栏目：一周热门影视'>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>
		<ExContent txt='一周豆瓣热门影视！《超感猎杀》不再续订，你还舍' lips='' content='《加勒比海盗5》夺得本周电影榜冠军。' arctic='豆瓣' from='来自栏目：一周热门影视'>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>
		<ExContent txt='一周豆瓣热门影视！《超感猎杀》不再续订，你还舍' lips='' content='《加勒比海盗5》夺得本周电影榜冠军。' arctic='豆瓣' from='来自栏目：一周热门影视'>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>
		<ExContent txt='一周豆瓣热门影视！《超感猎杀》不再续订，你还舍' lips='' content='《加勒比海盗5》夺得本周电影榜冠军。' arctic='豆瓣' from='来自栏目：一周热门影视'>
			<img src="../../assets/images/167121932.jpg" slot='rightImg' class='rightside'>
		</ExContent>
		<DouTime></DouTime>-->
	<Showbox>
			<img v-show='bol' slot='login' src="../../assets/images/1497106895917.jpg" @click='login()'>
	</Showbox>
	</div>
</template>

<script>
import MHeader from '../../components/header'
import ExContent from '../../components/excontent'
import DouTime from '../../components/doutime'
import Banner from '../../components/banner'
import CallBack from '../../components/callback'
import Showbox from '../../components/showbox'
export default {
		components: {
			MHeader,
			ExContent,
			DouTime,
			Banner,
			CallBack,
			Showbox
		},
		created:function(){
			this.search();
		},
		methods:{
			search:function(){
	//			console.log('search');
				this.axios.get('/api/homeData').then((response) => {
	//				console.log(response.data.data.recommend_feeds[0]);
					this.arr= response.data.data.recommend_feeds;
				});
			},
			login:function(bol){
	//			console.log('hhhhhhhh');
				this.bol=!this.bol;
				console.log(bol);
			},

		},
		data:function(){
			return {
				arr:[],
				bol:false,
			}
		}
}
</script>
<style>
	.homeWrap{background-color: #eee;}
	.callback{text-align: left;background-color: #fff;border-bottom:1px solid #eee;}
	.callback h3{font-size:15px;}
	.callback h3+span{display:inline-block;margin:10px 0;}
	.callback img{width:100%;height:100%;margin:0 10px 10px;}
	.callback p{font-size:14px;margin:10px 0;}
</style>