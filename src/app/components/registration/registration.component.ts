import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Component, OnInit ,Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, UntypedFormArray } from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registerForm!: FormGroup;
  submitted=true;
  password: string = '';
  showPassword : boolean = false;

    
constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar,private userservice:UserserviceService){}

ngOnInit(){
  this.registerForm = this.FormBuilder.group({
    firstname: ['', Validators.required], //Validators.pattern(/^[a-zA-Z]{5,}+$/)]
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
});
}
showHidePassword() {
  this.showPassword = !this.showPassword;
}
signup(){
  if(this.registerForm.valid){
  console.log('form value',this.registerForm.value);

 // api call here
  let reqpayload ={
    firstname: this.registerForm.value.firstname,
    lastname: this.registerForm.value.lastname,
    email: this.registerForm.value.email,
    password: this.registerForm.value.password
 }
 this.userservice.signupService(reqpayload).subscribe((response:any)=>{
  console.log(response)
 }, (error: any) => {
  console.log("Error", error);
 });
 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }
  else
  {
      this._snackbar.open('Invalid', 'Ok',{duration:2000});
    }
   
  
}
}

