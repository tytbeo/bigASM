import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  contactUs: FormGroup;
  submited ;
  constructor(private fb: FormBuilder ) { 

  }

  ngOnInit() {
    this.contactUs = this.fb.group({
        name: ['', Validators.required],
        emails: this.fb.array([ this.createEmailField() ])  ,
        phones: this.fb.array([ this.createPhoneField() ]),
        message: ['', [Validators.required]]
    });
    this.submited = false;
  }

  get form() { return this.contactUs.controls; }

  createEmailField(){
    return new FormControl('', [Validators.required, Validators.email]);
  }

  createPhoneField(){
    return new FormControl( '', [Validators.required, Validators.minLength(9), Validators.pattern("[0-9]+")] ) ;
  }

  addEmail(){
    let emails = this.form.emails as FormArray;
    emails.push( this.createEmailField() );
  }

  addPhone(){
    let phones = this.form.phones as FormArray;
    phones.push( this.createPhoneField() );
  }
  
  submitdata(){
    this.submited = true;
    if( this.contactUs.invalid )return;
    console.log(this.contactUs);
  }
}
