import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../pages/Index'

//通用组件 横向展示页面
import Xbox30 from '../components/xbox30'

import Home from '../pages/home/home'
	import MHeader from '../components/header'
	import Doutime from '../components/doutime'
	import ExContent from '../components/excontent'
	import Banner from '../components/banner'
	import CallBcak from '../components/callback'
import Audio from '../pages/audio/audio'
	import Film from '../components/film'
		import Move from '../components/move'
	import Book from '../components/book'
	 	import Bkcom from '../components/bkcom'
	import Tv from '../components/tv'
		import Tvcom from '../components/tvcom'
	import City from '../components/City'
	import Music from '../components/music'
	import TalAbout from '../components/talabout'


import Broadcast from '../pages/broadcast/broadcast'
	import GuanZhu from '../components/guanzhu'

import Group from '../pages/group/group'
	import GpClass from '../components/gpclass'
import Mine from '../pages/mine/mine'
 	import MineClass from '../components/mineclass'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children: [
      	{
      		path: '/',
      		name:'Film',
      		component: Film

      	},
      	{
      		path: 'film',
      		component: Film

      	},
      	{
      		path: 'book',
      		component: Book
      	},
      	{
      		path: 'tv',
      		component: Tv
      	},
      	{
      		path: 'city',
      		component: City
      	},
      	{
      		path: 'music',
      		component: Music
      	}
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }

  ]
})
