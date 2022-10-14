import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
		path: '/',
		name: 'start-page',
		component: () => import('@/views/StartPage.vue'),
	},
	{
		path: '/TeamPage',
		name: 'team-page',
		component: () => import('@/views/TeamPage.vue')
	},
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
	  return { top: 0 }
	},
  })
  
export default router  