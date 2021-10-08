

import { MatSidenavModule ,MatToolbarModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { from } from 'rxjs';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { HistoryComponent } from './history/history.component';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoggedMenuComponent } from './logged-menu/logged-menu.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonService } from './common.service';
import { DetailsComponent } from './details/details.component';
import {AngularFirestore,AngularFirestoreCollection, AngularFirestoreModule} from 'angularfire2/firestore';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import { MatButtonModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import {GoogleLoginProvider,AuthServiceConfig, SocialLoginModule} from 'ng4-social-login';

const config=new AuthServiceConfig([
  {
  id:GoogleLoginProvider.PROVIDER_ID,
  provider:new GoogleLoginProvider('384944158670-3reqhps7j3ej2fjv6bkcq96kfvu6dm64.apps.googleusercontent.com')
  }

 
],false);
export function providerconfig()
{
 return config; 
}
const appRoutes: Routes = [
  { path: 'friends', component: FriendsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'history', component: HistoryComponent },
  
  {
    path: '',
    redirectTo: '/friends',
    pathMatch: 'full'
  },
];

//I keep the new line

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, 
    FriendsComponent, GroupsComponent, HistoryComponent, 
     SideMenuComponent,
    SideMenuComponent,
    LoggedMenuComponent,
    DetailsComponent,
    
    DialogTemplateComponent
  ],
  imports: [
    MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
    //AngularFirestore,AngularFirestoreCollection,
    MatDialogModule, 
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    SharedModule,
    MatToolbarModule,
    MatSelectModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,SocialLoginModule
  
  ],
  providers: [CommonService,{provide:AuthServiceConfig,useFactory:providerconfig

  }],
  bootstrap: [AppComponent],
  entryComponents: [ DialogTemplateComponent ],
})
export class AppModule {
}
