import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }

  url='./assets/json/users.json';

    authUser(user: User): Observable<User>{
      return this.http.get<User>(this.url)
      .pipe(map(u => {u['password']=user.password;localStorage.setItem('token',u.token!); return u;}));
    
    }

    isAuth():boolean{
    if (localStorage.getItem('token')!.length>2) {
      return true;
    }else{
      return false;
    }
    }

    logout():void{
      localStorage.removeItem('token');
    }
}
