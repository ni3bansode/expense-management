import { FriendsComponent } from './../friends/friends.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
   
  },
  {
    path: 'register',
    component: AuthComponent,
  
  },
  {
    path:'friends',
    component:FriendsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
