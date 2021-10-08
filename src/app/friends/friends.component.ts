import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import {MatSelectModule} from '@angular/material/select';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';


interface friends{
  
  firstname:string;
  
  email:string;
  desc:string;
  rs:any;

 
paidby:string;
split:string;
}
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  showModal: boolean;
  showModal1: boolean;
  friendform: FormGroup;
  submitted = false;
  data: Observable<friends[]>;
  fsc:AngularFirestoreCollection<friends>;
  fsc1:AngularFirestoreCollection<any>;
  public details: Observable<any[]>;
  d:any;
  frnd_email:any;
  rupees:any;
  status:any;
arr:any;
  friendexp;
  constructor(private formBuilder: FormBuilder , 
    private router: Router,
    private db:AngularFireDatabase,private aa:CommonService ,
    private fire:AngularFirestore
    ) { 
      

    this.friendform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      split: ['', Validators.required],
      firstname: ['', Validators.required],
      description: ['',Validators.required],
      rupees: ['',Validators.required],
      paidby: ['',Validators.required],
      edate: ['',Validators.required],
     
     
  });







  }

  ngOnInit() {


    this.aa.a=false;
this.friendexp=[
  {
fname:'',
eemail:'',
desc:'',
rs:'',
paidby:'',
split:''
  }
];
 
//this.details = this.db.list("/friends").valueChanges();
//this.details.subscribe(console.log);
 
this.fsc = this.fire.collection<friends>('/friends');
this.d=this.fsc.valueChanges();










// var d= this.fire.collection<any>('friends').doc('nitin@gmail.com').collection().get;
// d.get().subscribe(res =>{
//   console.log(res.data(), res)
// })
// console.log(d);












}



show()
{
  this.showModal = true; // Show-Hide Modal Check
}
hide()
{
  this.showModal = false;

}

// show1()
// {
//   this.router.navigateByUrl('/details')
// }



onSubmit(value) {







if(value.paidby=='you' && value.split=='equally'){
this.rupees=(value.rupees/2);
this.status='owesyou';
}
else if(value.paidby=='heorshe' && value.split=='equally'){
this.rupees=(value.rupees/2);
this.status='youowe';
}

else if(value.split=='youowe'){
  this.rupees=value.rupees;
  this.status='youowe';
  }
  else if(value.split=='owesyou'){
    this.rupees=value.rupees;
    this.status='owesyou';
    }
  







  this.submitted = true;
  //console.log(this.friendform.value);
  // stop here if form is invalid
  // if (this.registerForm.invalid) {
  //     return;
  // }
  // if(this.submitted)
  // {
  //   this.showModal = false;
  // }
this.frnd_email=value.email;
console.log(this.frnd_email, value, "____")
  this.fire.collection<friends>('/friends/').doc(localStorage.getItem('login_mail')).set({

     [value.email]:{
             firstname:value.firstname,
             description:value.description,
              rupees:this.rupees,
              status:this.status

     }
     
  },{merge:false})
  
  
  














  var data = null;//call api
  this.aa.openModal("Expense","Expense Added ...", ()=>{
    //confirmed
    console.log('Yes');
  } );
  this.showModal = false;
  this.friendform.reset();

 // this.db.list("/friends/"+this.aa.login_mail).push(this.friendform.value)
  
  // for (var key in this.friendform.value) {
  
    
  //       if(key=='email'){
  //       this.friendexp.eemail=this.friendform.value[key];
        
  //       }
  //       else if(key=='split'){
      
  //       this.friendexp.split=this.friendform.value[key];
  //       }
  //       else if(key=='firstname'){

        
  //       this.friendexp.fname=this.friendform.value[key];
  //       }
  //       else if(key=='description'){

        
  //       this.friendexp.desc=this.friendform.value[key];
  //       }
  //       else if(key=='rupees'){

        
  //         this.friendexp.rs=this.friendform.value[key];
  //         }
  //         else if(key=='paidby'){

        
  //           this.friendexp.paidby=this.friendform.value[key];
  //           }
       // console.log(this.registerForm.value[key]);
    
}
// this.arr=this.friendform.value
//console.log(this.registerForm.value);
//console.log(this.friendexp);
  
}


