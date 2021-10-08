import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from './core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService} from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  
showModal: boolean;
registerForm: FormGroup;
submitted = false;
  constructor (
    private userService: UserService,private router: Router,
    private auth:CommonService
  ) {

    this.auth.a=true;

   
  }



  
  ngOnInit() {
    this.userService.populate();
        
    

   
  }



} 
  
