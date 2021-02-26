import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/user/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthUserService) { }

  ngOnInit(): void {
  }

  logout(){
  this.auth.logout();
  }
}
