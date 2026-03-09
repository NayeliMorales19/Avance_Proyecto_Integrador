import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

userName:any="";

ngOnInit(){

  const userData = localStorage.getItem("loggedUser");

  if(userData){
    const user = JSON.parse(userData);
    this.userName = user.name;
  }

}

logout(){

  localStorage.removeItem("loggedUser");

  location.href="/";

}

}