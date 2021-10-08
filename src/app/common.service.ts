import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

public a:boolean;
public aa:string;
public login_mail:string;
  constructor(private db: AngularFireDatabase,public dialog: MatDialog) {


   
    
   }
   getSingleItem(id: string) {
    return this.db.object('registration/' + id);
}





openModal(title:string, message:string, yes:Function = null) {
  const dialogConfig = new MatDialogConfig();

  // dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
      title: title,
      message:message
  };
  dialogConfig.minWidth = 400;

  const dialogRef = this.dialog.open(DialogTemplateComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      if(yes){
        yes();
      }
    }else{
     
    }
      
  });
}

}
