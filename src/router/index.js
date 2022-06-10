import { createRouter, createWebHistory } from 'vue-router'
import Announcements from "@/views/Announcements";
import BibleStudy from "@/views/BibleStudy";
import Sermons from "@/views/Sermons";
import WebsiteView from "@/views/WebsiteView";
import Gallery from "@/views/Gallery";

const routes = [
  {
    path: '/',
    name: 'home',
    component: WebsiteView
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements
  },
  {
    path: '/biblestudy',
    name: 'BibleStudy',
    component: BibleStudy
  },
  {
    path: '/sermons',
    name: 'Sermons',
    component: Sermons
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
