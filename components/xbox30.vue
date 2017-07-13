<template>
	<div class="xboxWrap">

		<slot name='Lips'><p v-text='lips'></p></slot>
		<slot name='Title'><h4 v-text='title'></h4></slot>
		<slot name="More"><span class='active' v-text='more'></span></slot>
		<!--<hr>-->
		<slot name='Days'><span v-text='days'></span></slot>
		<slot name='Ul'>
			<ul>
				<li>
					<slot name='Urls'><img v-text='urls' src="../assets/images/779131131.jpg" alt="" /></slot>
					<div class="xboxImg">
						<slot name='Name'><p>【上海】《我，唐吉可德》-2017-上海站</p></slot>
						<slot name='Container'><span>2017-06-08</span></slot><br>
						<slot name='Other'><span class='ticket'>官方售票</span></slot>
						<slot name='Fames'>
		<!--如果需要5星背景，需加class：stars。-->
							<p class='stars'><span v-text='score'></span></p>
						</slot>
					</div>
				</li>
				<li>
					<slot name='Urls1'><img v-text='urls' src="../assets/images/779131131.jpg" alt="" /></slot>
					<div class="xboxImg">
						<slot name='Name1'><p>【上海】《我，唐吉可德》-2017-上海站</p></slot>
						<slot name='Container1'><span>2017-06-08</span></slot><br>
						<slot name='Other'><span class='ticket'>官方售票</span></slot>
						<slot name='Fames1'>
		<!--如果需要5星背景，需加class：stars。-->
							<p class='stars'><span v-text='score'></span></p>
						</slot>
					</div>
				</li>
				<li>
					<slot name='Urls2'><img v-text='urls' src="../assets/images/779131131.jpg" alt="" /></slot>
					<div class="xboxImg">
						<slot name='Name2'><p>【上海】《我，唐吉可德》-2017-上海站</p></slot>
						<slot name='Container2'><span>2017-06-08</span></slot><br>
						<slot name='Other'><span class='ticket'>官方售票</span></slot>
						<slot name='Fames2'>
		<!--如果需要5星背景，需加class：stars。-->
							<p class='stars'><span v-text='score'></span></p>
						</slot>
					</div>
				</li>
				<li>
					<slot name='Urls3'><img v-text='urls' src="../assets/images/779131131.jpg" alt="" /></slot>
					<div class="xboxImg">
						<slot name='Name3'><p>【上海】《我，唐吉可德》-2017-上海站</p></slot>
						<slot name='Container3'><span>2017-06-08</span></slot><br>
						<slot name='Other'><span class='ticket'>官方售票</span></slot>
						<slot name='Fames3'>
		<!--如果需要5星背景，需加class：stars。-->
							<p class='stars'><span v-text='score'></span></p>
						</slot>
					</div>
				</li>
			</ul>
		</slot>
	</div>
</template>

<script>
	//title:标题
	//name:副标题
	//mans：人数
	//day:日期
	//lips:侧标签
	//container：描述内容
	//more：更多
	//stars:星级
	//score：评分
	//urls:配图
	export default {
		props:['name','title','mans','days','lips','container','more','stars','urls','score','data','time']
	}
</script>

<style scoped>
	.xboxWrap{
		text-align: left;
		padding:20px 0;
		position: relative;
		background-color:#fff;
		margin-top:10px;
	}
	.xboxWrap h4{display: inline-block;margin-bottom: 20px;font-weight:normal;margin-left:10px;}
	.xboxWrap h4+span{float:right;margin-right:20px;}
	/*.xboxWrap p{display: block;color:black;}*/
	.xboxWrap ul{
		width:100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: stretch;
	}
	.xboxWrap li{
		border:none;
		display: inline-block;
		width:30%;
	}
	.xboxWrap p{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.xboxWrap li img{
		width:110px;
		margin:0 9px;
	}
	hr+span{position:absolute;left:20px;top:59px;background-color:#fff;}
	.xboxWrap .active{color:limegreen;background:transparent;}
	.xboxWrap.stars{background:url('../assets/images/rating_star_card_on.png') repeat-x 0 0/18px;width:82px;}
	.xboxWrap .stars span{margin-left:85px;}
	.ticket{border:1px solid red;color:red;padding:0 2px;font-size:10px;margin-bottom: 10px;}
	.xboxWrap .xboxImg{font-size:14px;padding:0 9px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;height:70px;}
</style>