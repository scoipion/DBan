<template>
	<div class="tvWrap">
		<Tvcom title='最近值得看的国产剧'></Tvcom>
		<Tvcom title='近期值得看的美剧'></Tvcom>
		<Tvcom title='近期值得看的日剧'></Tvcom>
		<Tvcom title='近期值得看的综艺节目'></Tvcom>
	</div>
</template>

<script>
	import Tvcom from '../components/tvcom'
	export default {
		components:{
			Tvcom
		},
	}
</script>

<style>
	.tvWrap{
		margin-bottom: 72px;
	}
</style>