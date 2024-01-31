import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean=true;
  loginForm!:FormGroup;
  constructor( private fb : FormBuilder , private loginService : LoginService,private route : Router ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    });
    }
  hideChan(){
    
    this.hide = !this.hide
  }  
  logIn(){
    if(this.loginService.logIn(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value)){
      this.route.navigate(['/home'])
    }
  }
  
  
}
  
 
