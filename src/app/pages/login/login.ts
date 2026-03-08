import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email=''
  password=''

  constructor(private auth:AuthService, private router:Router){}

  login(){

    const user=this.auth.login(this.email,this.password);

    if(user){

      this.router.navigate(['/menu']);

    }else{

      alert("Usuario no registrado");

    }

  }

}