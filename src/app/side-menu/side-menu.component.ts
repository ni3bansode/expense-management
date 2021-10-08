import { HistoryComponent } from './../history/history.component';
import { from } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../core';
import { Router } from '@angular/router';
import { CommonService} from '../common.service';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import { NgModule } from '@angular/core';

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
  path:'history' , component:HistoryComponent
 },
//  {
//   path:'details' , component:DetailsComponent
//  },
//  {
//  path: 'header', redirectTo: './shared/layout/header'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})









//import { UserService } from '@angular/core';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  fsc:AngularFirestoreCollection;
  fullname:any;
  constructor( private userService: UserService, private router: Router,
    private auth:CommonService,  private fire:AngularFirestore
    ) { }
 currentUser: User;
  ngOnInit() {


    this.auth.a=false;
  //   this.fsc = this.fire.collection('/registration');
  this.userService.populate();

  // this.fsc.doc(this.auth.login_mail).get().subscribe(res => {
   
    
  //     this.fullname=res.data().fullname ;
  //     } )
         
  

  
  }
  logout() {
    this.auth.a=true;
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
   
  }

} 
  
