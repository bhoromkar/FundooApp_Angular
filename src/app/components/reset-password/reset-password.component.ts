import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  Resetform!: FormGroup;
  submitted=true;
  password: string = '';
  showPassword : boolean = false;
  
constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar){}

ngOnInit(){
  this.Resetform = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword: ['',[Validators.required,Validators.minLength(8)]],
});
}
showHidePassword() {
  this.showPassword = !this.showPassword;
}
submit(){
  if(this.Resetform.valid){
  console.log('form value',this.Resetform.value);
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Resetform.value, null, 4));
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



