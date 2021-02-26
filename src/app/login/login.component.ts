import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { AuthUserService } from '../user/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User= {login:"",email: "",password:""};
  constructor(private auth: AuthUserService) { }
  
  ngOnInit(): void {
   // throw new Error("Method not implemented.");
  }

  login(){

  this.auth.authUser(this.user).subscribe(
    u => {
      console.log(u);
      this.user=u; 
    },
    e => console.log(e)
  );
  }
  
}
