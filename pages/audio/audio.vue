<template>
	<div>
		<MHeader>
			<span class='title'>书影音</span>
			<img class='search_green' src='../../assets/images/ic_actionbar_search_icon.png' slot='leftImg'>
			<img class='chat_green' src='../../assets/images/ic_chat_green.png' slot='rightImg' @click='login(bol)'>
		</MHeader>
		<div class="b_menu">
			<span><router-link to='/audio/film'><b @click='fn(0)' :class='{active:sel==0}'>电影</b></router-link></span>
			<span><router-link to='/audio/book'><b @click='fn(1)' :class='{active:sel==1}'>读书</b></router-link></span>
			<span><router-link to='/audio/tv'><b @click='fn(2)' :class='{active:sel==2}'>电视</b></router-link></span>
			<span><router-link to='/audio/city'><b @click='fn(3)' :class='{active:sel==3}'>同城</b></router-link></span>
			<span><router-link to='/audio/music'><b @click='fn(4)' :class='{active:sel==4}'>音乐</b></router-link></span>
		</div>
		<router-view></router-view>
			<Showbox>
				<img v-show='bol' slot='login' src="../../assets/images/1497106895917.jpg" @click='login()'>
			</Showbox>
	</div>
</template>

<script>
import MHeader from '../../components/header'
import Showbox from '../../components/showbox'
export default {
	components: {
		MHeader,
		Showbox
	},
	data:function(){
		return {
			sel:0,
			bol:false,
		}
	},
	methods:{
		fn:function(i){
			this.sel=i;
			console.log(this.sel);
		},
		login:function(bol){
			this.bol=!this.bol;
		}
	}
}
</script>
<style>
b{
	line-height:40px;
	height:40px;
	display:inline-block;
	font-size:1.16rem;
}
.b_menu{
	width:100%;
	justify-content: space-around;
	display:flex;
	flex-flow: row nowrap;
	border:1px solid #eee;
	border-left: 0;
	border-right:0;
	color:#999;
	background-color:#fff;
}
.b_menu span{
	flex: 1;
}
.b_menu .active{
	color:lightgreen;
	border-bottom: 2px solid lightgreen;
	background:transparent;
}
</style>