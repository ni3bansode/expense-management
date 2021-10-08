import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showModal: boolean;
  friendform: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder  
    
   ) { 



    this.friendform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      split: ['', Validators.required],
      firstname: ['', Validators.required],
      description: ['',Validators.required],
      rupees: ['',Validators.required],
      paidby: ['',Validators.required],
     
     
  });
  }
  // get f() { return this.friendform.controls; }
  ngOnInit() {
   }

  // show()
  // {
  //   this.showModal = true; // Show-Hide Modal Check
  // }
  // hide()
  // {
  //   this.showModal = false;
  
  // }
  // onSubmit() {


  //   this.submitted = true;
  // }
}
