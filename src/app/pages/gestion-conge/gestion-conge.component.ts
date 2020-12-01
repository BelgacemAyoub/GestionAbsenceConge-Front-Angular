import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Conge } from 'src/app/model/conge.model';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CongeService } from 'src/app/services/conge.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestion-conge',
  templateUrl: './gestion-conge.component.html',
  styleUrls: ['./gestion-conge.component.css']
})
export class GestionCongeComponent implements OnInit {


congeList : Conge[];
usersList =new Array<User>();
isAuth : boolean;
public userAuthenticated : User;


  constructor(private congeService : CongeService,
              private userService : UserService,
              private authService : AuthenticationService,
              private router: Router) {}

  ngOnInit(): void {
    this.congeService.loadConges().subscribe(resp =>{
      this.congeList = resp;
      
      
    },err =>{
      console.log(err);
    });

    this.userService.loadUsers().subscribe(resp =>{
      resp.forEach(u =>{
        if(u.conges.length > 0){
          this.usersList.push(u);
        }
      })
    })
  }

  toAddConge(){
    this.router.navigate(['/home/addConge'],{queryParams:{'edit_mode':'ajouter'}})
  }

  detailUser(id : number){
    if((this.authService.isAdmin() || this.authService.isDirecteur()) || this.authService.getUserAuthenticated().id == id){
      this.router.navigate(['/home/detailConge', id]);
    }
  }

  VerificationCongeEnAttente(conges: Conge[]){

    for(let i =0; i<conges.length; i++){
      if(conges[i].confirmation == false){
        console.log("confirmation");
        console.log(conges[i].confirmation);
        return true;
      }
    }
    return false;
  }

}
