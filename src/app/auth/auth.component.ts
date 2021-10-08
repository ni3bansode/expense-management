import { async } from '@angular/core/testing';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Errors, UserService } from '../core';
import { Observable } from "rxjs/Observable";
import {AuthService,SocialUser,GoogleLoginProvider} from'ng4-social-login';
interface Registraion{
  
  firstName:string;
  lastName:string;
  password:string;

}
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
 
  authType: String = '';
  title: String = '';
  success:boolean;
  loginerror:boolean;
  isSubmitting = false;
  authForm: FormGroup;
  password: string="";
  eemail: string="";
  pass:string="";
  e:string="";
  data: Observable<Registraion[]>;
  fsc:AngularFirestoreCollection<Registraion>;
  d:any;
  dd=[];
  public flag1:boolean=false;
  flag2:boolean=false;
  public cadet = {};
  username;
  public user:any=SocialUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private db:AngularFireDatabase,
    
    private fire:AngularFirestore,
    private socialauthservice:AuthService,
    private s:CommonService
    
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'eemail': ['',[ Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]+")]],
      'password': ['', [Validators.required,Validators.minLength(6)]]
  

      


    });
   

//     this.fsc.valueChanges().subscribe(x=>{

//       this.cadet=x[0];
// });
//console.log(this.cadet);

  }
  googlelogin(){
  this.socialauthservice.signIn(GoogleLoginProvider.PROVIDER_ID).then(userdata =>{
    this.user=userdata;
  })  
  }
  
  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
      
      this.authForm.addControl('fullname', new FormControl());
        
      }
    });

    this.success=false;
 
    this.loginerror=false;
  //this.fsc.valueChanges().subscribe(val =>console.log(val[1]));
  //this.data = this.fsc.valueChanges();
  

    // this.fsc.doc('n').ref.get().then((doc)=>{
  
  //   this.d=doc.data();

  // });

  //console.log(this.d);



  // this.i=JSON.stringify(de);
       
      // console.log(this.i['email']);

    
  //this.data.subscribe(console.log);
  
 // this.d =JSON.parse(localStorage.getItem())

  }
  submitForm(value) {


  
   
   
   
   
    //this.isSubmitting = true;

    

  
   //console.log(this.authForm.value);
   if(this.title =="Sign up")
   {


    this.fire.collection<Registraion>('/registration').doc(value.eemail).set(value);

    //this.db.list("/registration").push(this.authForm.value);
    this.success=true;
   }
   
   else {
  


    this.fsc = this.fire.collection<Registraion>('/registration');
    
    this.fsc.doc(value.eemail).get().subscribe(res => {
      if(!res.exists) {
       this.loginerror=true;
      } 
      else {
        if(res.data().password === value.password) {
          this.s.a=false;
          localStorage.setItem('login_mail',value.eemail);
          this.router.navigateByUrl('/side-menu');
        } 
          else {
            this.loginerror=true;
          }      
      }
    })

  

  //console.log(this.flag1+  "   "+this.flag2);   

  }   
  
   // this.router.navigateByUrl('/side-menu');

  
  
   
  }
  

}

















// this.fsc.doc(value.eemail).get().subscribe(res => {
//   if(!res.exists) {
//     console.log("No Such user exists");
//   } 
//   else {
//     if(res.data().password === value.password) {
//       console.log(res.data());
//     } 
//       else {
//         console.log('Invalid credentials')
//       }      
//   }
// })