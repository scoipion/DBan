<template>
	<div class="musicWrap">
		<Xbox30 title='华语新碟榜' more='更多' score='8.0'>
			<P slot='Name'>猎户星座</P>
			<P slot='Name1'>北京女孩</P>
			<P slot='Name2'>放&披风</P>
			<P slot='Name3'>知非</P>
			<p slot='Container'>朴树</p>
			<p slot='Container1'>张蔷</p>
			<p slot='Container2'>陈奕迅</p>
			<p slot='Container3'>谢春华</p>
			<p slot='Fames' class="stars"><span>8.5</span></p>
		</Xbox30>
		<Xbox30 title='欧美新碟榜' more='更多' score='8.0'>
			<P slot='Name'>Wintness</P>
			<P slot='Name1'>Cigarettes After Six</P>
			<P slot='Name2'>Relaxer</P>
			<P slot='Name3'>hopeless fountain kingdom</P>
			<p slot='Container'>Katy Perry</p>
			<p slot='Container1'>Cigarettes After Six</p>
			<p slot='Container2'>Alt-J</p>
			<p slot='Container3'>Halsey</p>
			<p slot='Fames' class="stars"><span>8.5</span></p>
		</Xbox30>
		<Xbox30 title='日韩新碟榜' more='更多' score='7.5'>
			<P slot='Name'>KWON JI YONG</P>
			<P slot='Name1'>Async</P>
			<P slot='Name2'>PRDUCE 101 - 35</P>
			<P slot='Name3'>CALLING YOU</P>
			<p slot='Container'>G-DRAGON/p>
			<p slot='Container1'>坂本龙一</p>
			<p slot='Container2'>PRDUCE 101</p>
			<p slot='Container3'>HIGHLIGHT</p>
			<p slot='Fames' class="stars"><span>8.5</span></p>
		</Xbox30>
		<div class='sport'></div>
	</div>

</template>

<script>
	import Xbox30 from '../components/xbox30'
	export default {
		components:{
			Xbox30
		}
	}
</script>

<style>
	html{background-color:#eee;}
	.musicWrap{margin-top:10px;}
	/*售票图标隐藏*/
	.musicWrap .ticket{display: none;}
	/*星评开启*/
	.musicWrap .stars{background-size:15px;}
</style>