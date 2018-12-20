<template>
	<div class="hello">
		<el-container>
			<el-header>聚合收款服务平台</el-header>
			<el-container>
				<el-aside width="256px">
					<div style="text-align: left;">
						<el-row class="tac">
							<el-col :span="24">
								<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#fff" text-color="#535A69" active-text-color="#2081FD">
									<router-link to="/index">
										<el-menu-item index="1">
											<i class="el-icon-menu"></i>
											<span slot="title">首页</span>
										</el-menu-item>
									</router-link>
									<el-submenu index="2">
										<template slot="title">
											<i class="el-icon-location"></i>
											<span>商户管理</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="2-1">选项1</el-menu-item>
											<el-menu-item index="2-2">选项2</el-menu-item>
										</el-menu-item-group>
									</el-submenu>
									<el-submenu index="3">
										<template slot="title">
											<i class="el-icon-location"></i>
											<span>交易管理</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="3-1">选项1</el-menu-item>
											<el-menu-item index="3-2">选项2</el-menu-item>
										</el-menu-item-group>
									</el-submenu>
									<el-menu-item index="4">
										<i class="el-icon-menu"></i>
										<span slot="title">数据分析</span>
									</el-menu-item>
									<el-menu-item index="5">
										<i class="el-icon-menu"></i>
										<span slot="title">服务市场</span>
									</el-menu-item>
									<router-link to="/jurisdiction">
										<el-menu-item index="6">
											<i class="el-icon-menu"></i>
											<span slot="title">权限设置</span>
										</el-menu-item>
									</router-link>
								</el-menu>
							</el-col>
						</el-row>
					</div>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	a {
		color: #42b983;
	}
	
	.el-header {
		background: #F7F7FA;
		padding: 2px 0;
		padding: 2px 0;
		line-height: 60px;
		text-align: left;
		padding-left: 200px;
	}
	.el-main{
		padding:0;
	}
	.el-aside {
		background: #FAFAFB;
		box-shadow: 2px 0 4px 0 #EBEFF7;
	}
	
	.el-menu-item:hover {
		background: red;
	}
</style>