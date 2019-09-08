import {HomeConnected} from 'containers/home/home';
import {ProfileConnected} from 'containers/profile/profile';

export const StaticRoutes = [
  {
    path: '/',
    page: 'home',
    component: HomeConnected,
  },
  {
    path: '/profile',
    page: 'profile',
    component: ProfileConnected,
  },
];
