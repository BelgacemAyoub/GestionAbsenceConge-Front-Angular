import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: string;
  password: string;
  mode : number = 0;

  constructor(private authService : AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }
  
  onLogin(loginForm: NgForm) {
    this.authService.login(loginForm.form.value).subscribe( resp =>{
      let jwt = resp.headers.get('authorization')
      this.authService.saveToken(jwt);
      console.log(resp);
      
      this.router.navigate(['/home/accueil']);
    },
    err =>{
      this.mode = 1;
      console.log(err);
    } )
  }

  redirectToAddUser(){
    this.router.navigate(['/home/addUser'],{queryParams:{'edit_mode':'ajouter'}})
  }

}



