import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  public userAuthenticated : User = new User(-1,'','','','','','',false,null,null,null,null,0);
  constructor(private authService : AuthenticationService,
              private userService : UserService) { }

  ngOnInit(): void {
          // Enresistrer l'utilisateur Connecté au AuthService (usetAuthenticated)
          const login = this.authService.getLogin();
          
          this.userService.getUserByLogin(login).subscribe(resp =>{
          this.userAuthenticated = resp;
          this.authService.setUserAuthenticated(this.userAuthenticated);
          },error =>{console.log(error);
          });  
  }

}
