import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

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
  
constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar,private userservice:UserserviceService ){}

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

  let reqPayload={
    email:this.Resetform.value.email,
  NewPassword:this.Resetform.value.password,
    confirmpassword:this.Resetform.value.confirmpassword
  }
  this.userservice.ResetPasswordService(reqPayload).subscribe((response:any)=>{
    console.log(response)
   }, (error: any) => {
    console.log("Error", error);
   });
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



