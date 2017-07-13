<template>
	<div class='gp_classWrap'>
		<hr>
			<div class='box1'>
				<h5 v-text='title'>{{title}}</h5>
				<img src="../assets/images/167121932.jpg">
				<h4>日剧fans</h4>
				<span v-text='content'>
					<i>请自由讨论你所热爱的与日剧相关的话题。以上</i>
				</span>
				<span class="sp1">{{mans}}人</span>
			</div>
			<div class='box1 clear'>
				<h5 v-text='title'>{{title}}</h5>
			<img src="../assets/images/167121932.jpg">
			<h4>哈利波特和柯南迷</h4>
			<span v-text='content'>
				<i>请自由讨论你所热爱的与日剧相关的话题。以上</i>
			</span>
			<span class="sp1">{{mans1}}人</span>
			</div>
			<div class='box1 clear'>
				<h5 v-text='title'>{{title}}</h5>
			<img src="../assets/images/167121932.jpg">
			<h4>大话西游</h4>
			<span v-text='content'>
				<i>请自由讨论你所热爱的与日剧相关的话题。以上</i>
			</span>
			<span class="sp1">{{mans2}}人</span>
			</div>
	</div>
</template>

<script>
	export default {
		props:['title','name','content','mans','mans1','mans2']
	}

</script>

<style>
.gp_classWrap{position:relative;text-align: left;}
.gp_classWrap hr{width:100%;margin:0;border-width: thin;}
.gp_classWrap h5{position:absolute;left:160px;top:-7px;background-color:#fff;display: block;padding:0 20px;}
.gp_classWrap h5+img{width:80px;height:80px;float:left;margin-right:10px;}
.box1{
	margin:20px 20px 30px;
	padding-bottom: 20px;
	background-image: url('../assets/images/ic_group_check_anonymous.png');
	background-repeat: no-repeat;
	background-position:100% 30%;
	background-size:30px;
}
.box1 h4+span{display:inline-block;width:150px;font-size:10px;}
.clear{clear:both;}
.box1 span+span{float:right;margin-right:30px;}

</style>