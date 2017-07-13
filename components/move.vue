<template>
	<div class='moveWrap'>
		<h3 v-text='title'></h3>
		<span class='active'>更多></span>
		<hr />
		<span v-text='data'></span>
		<ul>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>新木乃伊</p>
				<span>12277人想看</span>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>我心雀跃</p>
				<span>2130人想看</span>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>李雷和韩梅梅</p>
				<span>1125人想看</span>
			</li>
			<li>
				<img src='../assets/images/167121932.jpg'>
				<p>李雷和韩梅梅</p>
				<span>1125人想看</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['name','title','mans','data']
	}
</script>

<style scoped>
	.moveWrap{
		text-align: left;
		padding:20px 10px;
		position: relative;
		overflow: hidden;
/*		height:206px;*/
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.moveWrap h3{
		display: inline-block;
		margin-bottom: 20px;
		font-weight:normal;
		margin-left:10px;
	}
	.moveWrap p{display: block;color:black;}
	span+hr{width:100%;margin-bottom: 10px;margin:0;border-width: thin;margin-bottom:10px;border-color:#EEEEEE;margin-left:10px;}
	.moveWrap ul{
		display: flex;
		justify-content: space-between;
		flex-flow: row nowrap;
	}

	.moveWrap li{
		/*display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		flex:1;*/
		border:none;
		padding:0 9px;


	}
	.moveWrap li img{
		width:110px;
	}
	hr+span{position:absolute;left:20px;top:59px;background-color:#fff;}
	.moveWrap .active{
		color:limegreen;
		background:transparent;
		float: right;
	}
</style>