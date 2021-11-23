import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Registration from './views/Registration.vue';
import Thanks from './views/Thanks.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/registration',
      name: 'registration',
      props: true,
      component: Registration,
    },
    {
      path: '/thanks',
      name: 'thanks',
      props: true,
      component: Thanks,
    },
  ],
});
