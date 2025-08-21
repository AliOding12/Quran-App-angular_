import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { userData } from './userdata';
import { response } from 'express';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
// interface registerUserdata {
//   name: string;
//   email: string;
//   password: string;
// }
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegisterComponent {
  // registeruserdata: registerUserdata = {
  //   name: '',
  //   email: '',
  //   password: ''
  // };
  user = userData;
  successmessage :string = '';
  constructor(private _auth: AuthService,private router:Router) { }
  registerUser() {
    this._auth.registeruser(this.user)
      .subscribe({
        next: (response) => {
          // Process the fetched data
          console.log('Data to be send:',response );
          this.successmessage="Registered Successfully";
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          // Handle errors
          console.error('Error fetching data:', error);
        }
      })
  }
}
