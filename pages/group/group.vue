<template>
	<div class='groupWrap'>
		<MHeader>
			<span class='title'>小组</span>
			<img class='search_green' src='../../assets/images/ic_group_search.png'>
				<img  class='chat_green' src='../../assets/images/ic_chat_green.png'>

		</MHeader>
		<div class='gp_top'>
					<h3>418914个有趣的小组</h3>
					<h4>立即选择加入吧！</h4>
					<!--<img class='gp_banner' src="../../assets/images/ic_group_banner.png">-->
					<span>根据兴趣推荐</span><br />
					<div>
						<img class='gp_banner_down' src='../../assets/images/ic_rec_group_banner_6.png'>
						<i>精选推荐</i>
					</div>

			</div>
		<div class='test'>
				<GpClass title='影视' name='' mans='306748' mans1='7073' mans2='4786'  content='请自由讨论你所热爱的与日剧相关的话题。以上'>
				</GpClass>
				<GpClass title='读书' name='' mans='306748' mans1='7073' mans2='4786'  content='请自由讨论你所热爱的与日剧相关的话题。以上'>
				</GpClass>
				<GpClass title='音乐' name='' mans='306748' mans1='7073' mans2='4786'  content='请自由讨论你所热爱的与日剧相关的话题。以上'>
				</GpClass>
		</div>

	</div>


</template>


<script>
import MHeader from '../../components/header'
import GpClass from '../../components/gpclass'

export default {
	props:['mans'],
	components: {
		MHeader,
		GpClass
	}
}
</script>
<style>
	.groupWrap{
		background-color: #fff;
		margin-bottom: 72px;
		}
	.gp_top{
		position:relative;
		text-align: center;
		/*height:280px;*/
		background:url(../../assets/images/ic_group_banner.png) no-repeat 0 0/100%;

	}
	.gp_top h3{padding-top:30px;line-height: 30px;}
	.gp_top h4{margin:0;width:auto;line-height: 30px;color:darkgray;}
	.gp_top img+span{position: absolute;left:25px;bottom:110px;color:darkgray;}
	.gp_top img+i{position: absolute;left:30px;bottom:30px;font-style:inherit;color:#fff;}
	.gp_top span{
		position:absolute;
		left:10%;

	}
	.gp_top .gp_banner{width:100%;left:0;top:0;position: absolute;}
	.gp_top div{
		position:relative;
		font-size:100px;
	}
	.gp_top div i{
		position:absolute;
		bottom:40%;
		left:10%;
		font-size:0.2em;
		line-height:0.2em;
	}
	.gp_top .gp_banner_down{
		width:90%;
	}
	.test{}
	.test img{width:0.8rem;height:80px;float:left;}
</style>