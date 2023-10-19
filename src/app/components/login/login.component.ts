import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
// import logo from "../../../assets/image/logo.png";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginform!: FormGroup;
    submitted=true;
  constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar){}
  
  ngOnInit(){
    this.loginform = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  });
  }
  login(){
    if(this.loginform.valid){
    console.log('form value',this.loginform.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginform.value, null, 4));
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

