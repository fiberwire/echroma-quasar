import Vue from 'vue';
import VueRouter from 'vue-router';
import NewPainting from './components/NewPainting.vue';
import Home from './components/Home.vue';
import Error404 from './components/Error404.vue';

Vue.use(VueRouter);

export const AppRouter = new VueRouter({
  routes: [
    {
      path: '/', component: Home, children: [
        { path: 'painting/new', component: NewPainting }
      ]
    },
    { path: '*', component: Error404 } // Not found
  ]
});

export default AppRouter;
