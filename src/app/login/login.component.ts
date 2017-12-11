import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   private user: string;
   private cookie;
   private http;
   private events;

   constructor(http: HttpClient, cookie: CookieService) {
      this.http = http;
      this.cookie = cookie;
   }

   loginUser(user: string): void {
      this.http.get('http://ffg.cdk.com:4000/find/user/' + user)
         .subscribe(data => {
            this.cookie.putObject('user', {
               username: data.user[0].sAMAccountName,
               fullName: data.user[0].cn,
               email: data.user[0].mail
            });
            if (data.user[0]) {
               window.location.href = 'http://localhost:4200/time-punch';
            }
         },
         err => alert(err));
   }
   ngOnInit() { }
}
