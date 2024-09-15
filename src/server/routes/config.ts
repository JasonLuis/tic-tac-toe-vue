import { createRouter, createWebHistory } from 'vue-router';
import SinglePlayerPage from '../../pages/singlePlayer.vue';

const routes = [
  {
    path: '/singlePlayer/:level',
    name: 'singlePlayer',
    component: SinglePlayerPage,
    props: true // Para passar os parâmetros como props para o componente
  }
  // Outras rotas...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
