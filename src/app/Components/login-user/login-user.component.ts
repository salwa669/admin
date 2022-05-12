import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
 export class LoginUserComponent implements OnInit {
//   public userForm !: FormGroup;

//   users: User ={}as User;
  
constructor(
  private authService: AuthUserService,
    private formBuilder: FormBuilder,

     ) { }
  isUserLoggedIn :boolean =false;
  ngOnInit(): void {

    this.isUserLoggedIn = this.authService.isUserLoggedIn;
  }
  user:User ={} as User;
  login()
  {
    this.authService.Login(this.user).subscribe(res=>{console.log("user logged")})
   
    console.log(this.user)
  const token=  this.authService.Login(this.user).subscribe(res=>{console.log("user login")});
      alert("Login")
      console.log(token);
  } 

}
