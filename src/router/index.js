import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import student from '../views/student/student.vue'
import teacher from '../views/student/student_search.vue'
import admin from '../views/student/student.vue'
import input from '../views/teacher/input.vue'
import register from '../views/admin/register.vue'
import student_search from '../views/student/student_search.vue'


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
      meta: { requiresAuth: true }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/input',
      name: 'input',
      component: input,
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { requiresAuth: true }
    },
    {
      path: '/input',
      name: 'input',
      component: input,
      meta: { requiresAuth: true }
    },
    {
      path: '/student_search',
      name: 'student_search',
      component: student_search,
      meta: { requiresAuth: true }
    },
    
  ]
})

export default router
