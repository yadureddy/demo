import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any=''
  email:any=''
  password:any=''
  results:any=''

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  public  logIn():void
  {
      var str:string  = this.route.snapshot.queryParams["returnUrl"];
      
      if(str ==  null)
      {
        str  = "/";
      }

      if (this.username == "admin" && this.password == "admin123")
      {
        localStorage.setItem("AUTH_TOKEN", this.username);
        this.router.navigate([str]);
      }
      else
      {
        this.results = "Invalid user id or password";
      }

  }

}


