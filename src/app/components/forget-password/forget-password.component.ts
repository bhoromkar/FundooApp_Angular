import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  Forgetform!: FormGroup;
    submitted=false;
  constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar,private userservice:UserserviceService){}
  
  ngOnInit(){
    this.Forgetform = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     
  });
  }
  next(){
    this.submitted=true;
    if(this.Forgetform.valid){
      let reqbbpayload ={
        email: this.Forgetform.value.email
        }
     this.userservice.forgetPasswordService(reqbbpayload).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem("token" ,response.data)
     });
    console.log('form value',this.Forgetform.value);

    }else{
        this._snackbar.open('Invalid', 'Ok',{
             duration:3000,
           });
      }
    }
  }

