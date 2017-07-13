<template>
	<div>
		<ul>
			<li :class="currentPage==1?'disabled':''"><a href='#' @click='turnPage(1)'>首页</a></li>
			<li :class="currentPage==1?'disabled':''"><a href='#' @click='turnPage(currentPage-1)'>上一页</a></li>
			<li v-if='currentPage-3>0' @click='turnPage(currentPage-3)'><a href='#' v-text='currentPage-3'></a></li>
			<li v-if='currentPage-2>0' @click='turnPage(currentPage-2)'><a href='#' v-text='currentPage-2'></a></li>
			<li v-if='currentPage-1>0' @click='turnPage(currentPage-1)'><a href='#' v-text='currentPage-1'></a></li>
			<li class='active'><a href='#' v-text='currentPage'></a></li>
			<li v-if='currentPage<totalPage' @click='turnPage(currentPage+1)'><a href='#' v-text='currentPage+1'></a></li>
			<li v-if='currentPage+1<totalPage' @click='turnPage(currentPage+2)'><a href='#' v-text='currentPage+2'></a></li>
			<li v-if='currentPage+2<totalPage' @click='turnPage(currentPage+3)'><a href='#' v-text='currentPage+3'></a></li>
			<li :class="currentPage==totalPage?'disabled':''"><a href='#' @click='turnPage(currentPage+1)'>下一页</a></li>
			<li :class="currentPage==totalPage?'disabled':''"><a href='#' @click='turnPage(totalPage)'>尾页</a></li>
		</ul>
		<div>
			<small>当前第 <span>{{ currentPage }}</span>, 共有 <span>{{ totalPage }}</span></small>
			<input type='number' v-model='goToPage' :class='{err: bol}'/><button @click='turnPage(goToPage)'>Go</button>
		</div>
	</div>
</template>

<script>

export default {
	props: ['change'],
	data: function(){
		return {
			currentPage: 100,
			totalPage: 100,
			goToPage:'',
			bol: false
		}
	},
	methods: {
		turnPage: function(num){
			var myNum = parseInt(num);

			if (myNum>100 || myNum<1 || !myNum) {
				console.log('错了');
				this.goToPage = '';
				this.bol = true;
				return;
			}else{
				this.bol = false;
			}

			this.currentPage = myNum;
			this.goToPage = '';

			this.change(num);
		}
	}
}

</script>

<style>
	ul {display: inline-block;}
	li {list-style-type:none; float: left; padding: 5px 10px; border:1px solid gray;}
	a {text-decoration:none;}
	.active {background: skyblue;}
	.disabled a {cursor: not-allowed; color:gray;}
	.err {border: 1px solid red;}
</style>