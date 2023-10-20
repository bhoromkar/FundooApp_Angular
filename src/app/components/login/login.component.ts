import { UserserviceService } from './../../services/userservice/userservice.service';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
// import logo from "../../../assets/image/logo.png";
import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from 'src/app/services/Httpservice/httpservice.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginform!: FormGroup;
    submitted=true;
    password: string = '';
    showPassword : boolean = false;
  
    
  constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar,private userservice:UserserviceService){}
  
  ngOnInit(){
    this.loginform = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  });
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  login(){
    if(this.loginform.valid){
    console.log('form value',this.loginform.value);
    
     // api call for login
     let reqPayload ={
      email: this.loginform.value.email,
      password: this.loginform.value.password
    }
   this.userservice.loginService(reqPayload)
    
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

