
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'Table' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('components/TablePage.vue')
      },
      {
        path: 'card',
        name: 'Card',
        component: () => import('components/CardPage.vue')
      },
      {
        path: 'mode',
        name: 'Mode',
        component: () => import('components/ModePage.vue')
      }
    ]
  }
]
export default routes
