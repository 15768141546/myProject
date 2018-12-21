<template>
	<div>
		<div class="v-home">
			<div class="v-home-title">这里是一个商户名称</div>
			<div class="v-nav">
				<ul>
					<li class="active">今天</li>
					<li>昨天</li>
					<li>近7天</li>
				</ul>
			</div>
		</div>
		<div class="v-content">
			<div class="v-update-time">
				数据更新时间：10-11 10:54
			</div>
			<div class="v-item-box">
				<div class="v-box box1">
					<img v-bind:src="imgUrl" class="v-box-img"/>
					<p class="v-box-txt">交易金额</p>
					<p class="v-box-num">3,243,669.34元</p>
				</div>
				<div class="v-box box1">1</div>
				<div class="v-box box1">1</div>
				<div class="v-box box2">1</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				imgUrl:require('../assets/tkje.png')
			}
		},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li{
		list-style: none;
	}
	.v-home {
		padding: 20px 25px 0 25px;
		height: 118px;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}
	
	.v-home-title {
		font-family: PingFangSC-Medium;
		font-size: 20px;
		color: #252D33;
		line-height: 28px;
		text-align: left;
		margin:5px 0 25px;
		
	}
	.v-nav ul{
		padding-left: 0;
		overflow: hidden;
	}
	.v-nav li{
		float: left;
		margin-right:35px;
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #697781;
		cursor:pointer;
	}
	.v-nav li.active{
		color: #2081FD;
		border-bottom:2px solid #2081FD;
		padding-bottom:14px;
	}
	.v-content{
		height:100%;
		width:100%;
		background: #F7F9FC;
		padding:0 25px 25px;
		box-sizing: border-box;
	}
	.v-update-time{
		height:60px;
		width:100%;
		line-height:60px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #697781;
		text-align: left;
	}
	.v-item-box{
		display: flex;
		justify-content:space-between;
	}
	.v-box{
		width:230px;
		height:210px;
		background: #FFFFFF;
		border-radius: 6px;
	}
	.box2{
		width:372px;
	}
	.v-box-img{
		margin:35px 0 25px;
	}
</style>