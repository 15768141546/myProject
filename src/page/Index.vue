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
					<img v-bind:src="imgUrl1" class="v-box-img"/>
					<div class="v-box-txt">交易金额</div>
					<div class="v-box-num">3243669.34元</div>
				</div>
				<div class="v-box box1">
					<img v-bind:src="imgUrl2" class="v-box-img"/>
					<div class="v-box-txt">交易笔数</div>
					<div class="v-box-num">9987 笔</div>
				</div>
				<div class="v-box box1">
					<img v-bind:src="imgUrl3" class="v-box-img"/>
					<div class="v-box-txt">笔单价</div>
					<div class="v-box-num">3813.22 元</div>
				</div>
				<div class="v-box box2">
					<img v-bind:src="imgUrl4" class="v-box-img"/>
					<ul>
						<li>
							<div class="v-box-txt">退款金额</div>
							<div class="v-box-num">9158.33 元</div>
						</li>
						<li style="border-left:1px solid #EDF1F7">
							<div class="v-box-txt">退款笔数</div>
							<div class="v-box-num">122 笔</div>
						</li>
					</ul>
					
				</div>
			</div>
			<div class="v-echartBox">
				<div class="title"><img src="../assets/qst.png"/> 交易趋势图</div>
				<div class="v-btn">
					<ul>
						<li class="active">交易金额</li>
						<li>交易笔数</li>
						<li>笔单价</li>
						<li>退款金额</li>
						<li>退款笔数</li>
					</ul>
				</div>
				<div class="v-smallTxt">
					单位：万元
				</div>
				<div class="seven_echarts"  id="seven"></div>
				<div class="v-echart-label">
					<div class="v-label1">1220</div>
					<div class="v-label2">1225</div>
					<div class="v-label3">1230</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: 'Home',
		data() {
			return {
				imgUrl1:require('../assets/jyje.png'),
				imgUrl2:require('../assets/jybs.png'),
				imgUrl3:require('../assets/bdj.png'),
				imgUrl4:require('../assets/tkje.png'),
				
			seven_chart:null,
				month_chart:null,
                seven_option : {				    
				    tooltip: {
				        trigger: 'axis',
				        borderColor:'rgba(255,255,255,0.8)',
				        backgroundColor:'rgba(255,255,255,0.8)',//通过设置rgba调节背景颜色与透明
				       	formatter: function (params) {
			            var date = "<div style='width:135px;height:70px;0;box-shadow: 0 2px 30px 0 #E5F0FF;border-radius: 2px'>"+
			            "<div style='color: rgba(37,45,51,0.85);font-size:12px;padding:10px 0 8px 15px;text-align:left'>04:00 ～ 05:00</div>"+
			            "<div style='color:rgba(37,45,51,0.85);font-size:12px;text-align:left;padding-left:15px;'>金额：<span style='color: #2081FD;font-size:16px;'>110</span>万元</div></div>";
			            return date;
			        }, 
				    },
				    grid: {
				    	top:'3%',
				        left: '3%',
				        right: '0%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				    	axisTick:{
				    		show:false,//去掉刻度
				    	},
				    	axisLine:{
				    		lineStyle:{
				    			color:'#F7F7F7',//x轴线的颜色
				    		}
				    	},
				    	axisLabel:{
				    		interval:0,
				    		show:false,
				    		textStyle:{
				    			color:' #B1B8CB', //x轴字的颜色
				    			fontSize:'12px',
				    		}
				    	},
				    	axisPointer:{
				    		type:'line',
				    		show:true,
				    		zlevel:2,
				    		lineStyle:{ //鼠标滑过出现的那根线
				    			width:1,
				    			color:'#1179FC',
				    		}
				    	},
				        type: 'category',
				        boundaryGap: false,
				        data: ["11-26","11-27","11-28","11-29","11-30","12-01","12-02"]
				    },
				    yAxis: { 	
				    	axisTick:{//去掉刻度
				    		show:false,
				    	},
				    	axisLine:{//Y轴线设置
				    		show:false,
				    	},
				    	axisLabel:{//Y轴字的颜色
				    		textStyle:{
				    			color:' #B1B8CB',
				    			fontSize:'12px',
				    		}
				    	},
				    	splitLine:{ //曲线内的平行于x轴的线
				    		show:true,
				    		lineStyle:{
				    			color: '#F7F7F7',
				    		}
				    	},
				        nameLocation: 'end',
				    	type: 'value',
				        
				    },
				    series: [
				   		{   
				   			symbol: "none",//去掉折线上面的点
				   			zlevel:5,
				            type:'line',
				            data:[0,1,3,4,0,2,4],
				            smooth:true,
				            symbolSize:20,
				           // symbol:'../assets/jybs.png',
				            lineStyle:{//设置折线色颜色
                 				color:'#167CFD'
        					},
        					itemStyle:{//设置折线折点的颜色
						            normal : {
						                color:'#3f89ec'
						        }
        					},
        					areaStyle:{
        						normal:{
        							color:new echarts.graphic.LinearGradient(0,0,0,1,[{
        								offset:1,color:'#fff',
        							},{
        								offset:0,color:'rgba(32,129,253,1)',	
        							}])
        						}
        					}
				       },
				       
				        
				    ],
				},
			}
		},
		mounted:function (){
			this.get_echarts();
		},
		methods:{	
			get_echarts:function(){
				this.seven_chart = this.echarts.init(document.getElementById("seven"));
				// 把配置和数据放这里
				this.seven_chart.setOption(this.seven_option)              
			}
        },
        beforeDestroy() {
            if (!this.seven_chart) { return }
            this.seven_chart.dispose();
            this.seven_chart = null;
        },
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
	.box2 ul{
		display:flex;
		margin:0;
		padding:0;
	}
	.box2 ul li{
		text-align: center;
        width: 50%;
	}
	.v-box-img{
		margin:35px 0 25px;
	}
	.v-box-txt{
		opacity: 0.7;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #697781;
		margin: 8px 0;
	}
	.v-box-num{
		font-family: DINAlternate-Bold;
		font-size: 24px;
		color: #2C343A;
	}
	.v-echartBox{
		margin:20px 0 48px;
		height:440px;
		width:100%;
		background: #fff;
	}
	.v-echartBox .title{
		font-family: PingFangSC-Semibold;
		font-size: 20px;
		color: #252D33;
		text-align: left;
		padding:30px 0 0px 30px;
	}
	.v-btn{
		margin:5px 0 20px;
	}
	.v-btn ul{
		overflow: hidden;
	    padding-left: 30px;
	}
	.v-btn li{
		height:28px;
		width:96px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: rgba(83,90,105,0.80);
		float: left;
		line-height: 28px;
		cursor: pointer;
	}
	.v-btn li.active{
		height:28px;
		width:96px;
		background: #2081FD;
		border-radius: 28px;
		color:#fff;
	}
	.v-smallTxt{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: rgba(105,119,129,0.65);
		letter-spacing: 0;
		text-align: left;
		padding-left: 30px;
	}
	.seven_echarts{
		height:220px;
		margin:10px 30px 0;
		
	}
	.v-message{
		height:80px;
		width:145px;
		background:#fff;
	}
	.v-echart-label{
		padding:0 30px 0 75px;
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #B1B8CB;
		letter-spacing: 0;
		text-align: center;
		display: flex;
	}
	.v-echart-label div{
		width:33.3%;
	}
	.v-label1{
		text-align: left;
	}
	.v-label2{
		text-align: center;
	}
	.v-label3{
		text-align: right;
	}
</style>