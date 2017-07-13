<template>
	<div class='swiper-container' :class='swiperid'>
		<div class='swiper-wrapper'>
			<slot name='swiper-con'></slot>
		</div>
		<div :class='{"swiper-pagination":pagination}' :style='{"text-align":paginationDirection}'></div>
	</div>
</template>

<script>
	import '../assets/libs/swiper/js/swiper.js'
	export default {
		props:{
			swiperid:{
				type:String,
				default:''
			},
			pagination:{
				type:Boolean,
				default:true
			},
			paginationDirection:{
				type:String,
				default:'center'
			},
			effect:{
				type:String,
				default:'slide'
			},
			loop:{
				type:Boolean,
				default:true
			},
			direction:{
				type:String,
				default:'horizontal'
			},
			autoplay:{
				type:Number,
				default:5000
			},
			paginationType:{
				type:String,
				default:'bullets'
			}			
		},
		mounted:function(){
			var That = this;
			new Swiper('.'+That.swiperid,{
				pagination:"swiper-pagination",
				paginationDirection:"swiper-pagination",
				effect:That.effect,
				loop:That.loop,
				direction:That.direction,
				autoplay:That.autoplay,
				paginationType:That.paginationType
			})
		}
	}
	
</script>
<style>
	@import "../assets/libs/swiper/css/swiper.css";
	.swiperid{width:300px;height:100px;}
	.swiper-container img{width:100%;}
	.swiper-pagination-bullet-active{background:#fff;}
</style>