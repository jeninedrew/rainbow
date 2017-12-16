import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDos from '@/components/ToDos'
import Booya from '@/components/Booya'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
			component: HelloWorld,
		},
		{
      path: '/booya',
      name: 'Booya',
			component: Booya,
    },
		{
      path: '/yup',
      name: 'ToDos',
			component: ToDos,
    },
		{
      path: '/um',
      name: 'ToDos',
			component: ToDos,
    },
		{
      path: '/eek',
      name: 'ToDos',
			component: ToDos,
    },
		{
      path: '/beendone',
      name: 'ToDos',
			component: ToDos,
    }
  ]
})
