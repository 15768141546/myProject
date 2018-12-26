import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/page/Index'
import Jurisdiction from '@/page/Jurisdiction'

Vue.use(Router)
export default new Router({
	routes: [
	{
		path: '/',
		name: 'Index',
		component: Index,
		children: [{
				path: '/home',
				name: 'Home',
				component: Home
			}, {
				path: '/jurisdiction',
				name: 'Jurisdiction',
				component: Jurisdiction
			},
			{
				path: '*',
				redirect: '/home'
			}]
	}, 
	]
})