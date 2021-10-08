import { GroupsComponent } from './groups/groups.component';
import { HistoryComponent } from './history/history.component';
import { FriendsComponent } from './friends/friends.component';
import { DetailsComponent } from './details/details.component';

import { from } from 'rxjs';

import {HeaderComponent} from './shared/layout/header.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//import {SideMenuComponent} from './side-menu';
const routes: Routes = [
  

  // {
  //   path: 'profile',
  //   loadChildren: './profile/profile.module#ProfileModule'
  // },
  // {
  //   path: 'editor',
  //   loadChildren: './editor/editor.module#EditorModule'
  // },
  
 {
  path:'side-menu' , component:SideMenuComponent
 },
//  {
//   path:'details' , component:DetailsComponent
//  },
//  {
//  path: 'header', redirectTo: './shared/layout/header'
//  },
 {
path:'friends',component:FriendsComponent
 },
 {
  path:'history',component:HistoryComponent
   },
   {
     path:'groups',component:GroupsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
