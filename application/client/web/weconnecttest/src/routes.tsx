import  Login  from './app/login/login';
import  Sefscreen  from './app/sefscreen/sefscreen';
import  Signup  from './app/signup/signup';
import  Home  from './app/home/home';
import  Authorization  from './app/authorization/authorization';
import  Manageroles  from './app/manageroles/manageroles';
import  Manageusers  from './app/manageusers/manageusers';
import  Managecontrol  from './app/managecontrol/managecontrol';
import  User  from './app/user/user';
import  ProfilesettingsComponent  from './app/user/profilesettings/profilesettings';
import { lazy } from 'react';
import Template from "./app/template/template";

let routes: any = [
  { path: '/login', component: Login },
{ path: '/sefscreen', component: Sefscreen },
{ path: '/signup', component: Signup },
{ path: '/home', component: Home },
{ path: '/authorization', component: Authorization },
{ path: '/manageroles', component: Manageroles },
{ path: '/manageusers', component: Manageusers },
{ path: '/managecontrol', component: Managecontrol },
{ path: '/usermanagement', component: User },
{ path: '/profile', component: ProfilesettingsComponent },
{ path : '/createscreen', component: lazy(()=>import('./app/createscreen/createscreen')) },
{ path : '/gridscreen', component: lazy(()=>import('./app/gridscreen/gridscreen')) },
{ path : '/searchscreen', component: lazy(()=>import('./app/searchscreen/searchscreen')) },
{ path : '/rolescreen', component: lazy(()=>import('./app/rolescreen/rolescreen')) },
{ path: "", component: Template },

];

export let userRoutes: any;
if (sessionStorage.getItem("screens")) {
 
 userRoutes = JSON.parse(sessionStorage.getItem("screens") || " ");
} else {
  userRoutes = [];
}

export default routes;
