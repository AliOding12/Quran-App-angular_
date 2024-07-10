import { Component } from '@angular/core';
import { userLoginData } from './userlogindata';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 userlogin = userLoginData;
 successmessage : string = '';
constructor(private _auth: AuthService,private router:Router) { }
 checkUser() {
   this._auth.loginuser(this.userlogin)
   .subscribe({
     next: (response) => {
       // Process the fetched data
       console.log('user exits',response );
       this.successmessage = 'Login successfull';
       this.router.navigate(['dashboard']);
     },
     error: (error) => {
       // Handle errors
       console.error('Error fetching data:', error);
     }
        })
         }
}
// Add login component and template
