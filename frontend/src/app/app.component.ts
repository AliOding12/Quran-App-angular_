import { routes } from './app.routes';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterComponent,FormsModule,CommonModule,LoginComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[AuthService]
})
export class AppComponent {
  title = 'frontend';
  constructor(private router:Router ){}
  handleClick1() {
    this.router.navigate(['register']);
  }
  handleClick2() {
    this.router.navigate(['login']);
  }
}
