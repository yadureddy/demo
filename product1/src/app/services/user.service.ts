import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Base_Url="http://localhost:10899/user/"

  constructor( private httpclient:HttpClient) { }



  registerUser(user:any){

    return this.httpclient.post(`${this.Base_Url}register`,user);



  }
}
