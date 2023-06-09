import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import student from '../views/student/student.vue'
import teacher from '../views/teacher/teacher.vue'
import manager from '../views/manager/manager.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/student',
      name: 'student',
      component: student,
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher,
    },
    {
      path: '/manager',
      name: 'manager',
      component: manager,
    }
    
  ]
})

export default router
