import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  user={
    name:'',
    email:'',
    password:''
  }

  constructor(private auth:AuthService, private router:Router){}

  register(){

  if(!this.user.name || !this.user.email || !this.user.password){

    alert("Completa todos los campos");

    return;

  }

  this.auth.register(this.user);

  alert("Usuario registrado");

  this.router.navigate(['/']);

}

}