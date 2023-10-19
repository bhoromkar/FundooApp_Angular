import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, UntypedFormArray } from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registerForm!: FormGroup;
  //submitted=true;
constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar){}

ngOnInit(){
  this.registerForm = this.FormBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
});
}
signup(){
  if(this.registerForm.valid){
  console.log('form value',this.registerForm.value);
  }else{
      this._snackbar.open('Invalid', 'Ok');
    }
    // this._snackbar.open('Invalid data' ,'Ok',{
    //   duration:2000,
    // })
  }
}

