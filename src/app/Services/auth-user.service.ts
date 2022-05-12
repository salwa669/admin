import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private httpHeaders;

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', })
    }

  }

  Login (user:User) :Observable<User>
  {
    return this.httpClient.post<User>
    (`${environment.APIBaseUrl}Account/Login`, JSON.stringify(user),this.httpHeaders); 
    //    let userToken = 
    // localStorage.setItem('userToken',userToken);
  }
  Logout(){
    localStorage.removeItem('userToken');
  }
  //get read only property
  get isUserLoggedIn () :boolean
{
    return (localStorage.getItem('token'))?true:false;
}
  Register (newUser: User) :Observable<User>
  {
    //call login api and get access token
    return this.httpClient.post<User>(`${environment.APIBaseUrl}Account/Register`,
     JSON.stringify(newUser),this.httpHeaders);
   
  }
}
