import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  Forgetform!: FormGroup;
    submitted=true;
  constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar){}
  
  ngOnInit(){
    this.Forgetform = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     
  });
  }
  next(){
    if(this.Forgetform.valid){
    console.log('form value',this.Forgetform.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Forgetform.value, null, 4));
    }else{
        this._snackbar.open('Invalid', 'Ok',{
             duration:3000,
           });
      }
      // this._snackbar.open('Invalid data' ,'Ok',{
      //   duration:2000,
      // })
    }
  }

