import AllAirline from './components/AllAirline.vue';
import CreateAirline from './components/CreateAirline.vue';
import EditAirline from './components/EditAirline.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllAirline
    },
    {
        name: 'create',
        path: '/create',
        component: CreateAirline
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditAirline
    }
];