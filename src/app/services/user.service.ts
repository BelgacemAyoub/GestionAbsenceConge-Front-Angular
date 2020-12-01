import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import RoleLogin from '../model/RoleLogin.model';

import { User } from '../model/user.model';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList : User[] = [];
  private host : String = "http://localhost:8080/api/user";
  

  constructor(private http : HttpClient, 
              private authService : AuthenticationService) {}

  

  loadUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.host+"/list", {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})})
     .pipe(map(resp =>{
      this.userList = resp;
      console.log("********* usersList");
      console.log(this.userList);
      return resp;
     }));
  }
  getUsers(){
    return this.userList.slice();
  }

  findUserById(id : number): User{
    let user : User;
    this.userList.forEach(u =>{
      if(u.id == id){
        user =  u;
      }
    });
    return user;
  }
  saveUser(user:User){
    // on peut pas ajouter un token lors de l'inscription car il n'existe pas encore
    return this.http.post(this.host+"/addUser", user ,{observe: 'response'});
  }
  activerUser(user_id : number){
    return this.http.get(this.host+"/activerUser/"+String(user_id) ,{headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  desactiverUser(user_id : number){
    return this.http.get(this.host+"/desactiverUser/"+String(user_id) ,{headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  addRoleToUser (login : string, roleName : string){
    //const userRole = new RoleLogin(login,roleName);
    let userRole = {"login":login, "roleName" :  roleName};
    
    return this.http.post(this.host+"/addRoleToUser",userRole ,{observe: 'response'} );
  }

  deleteUser(id : number){
    return this.http.delete(this.host+"/deleteUser/"+String(id),{headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  getUserById(id: number){
    return this.http.get<User>(this.host+"/findUser/" +String(id), {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  getUserByLogin(login: string){
    return this.http.get<User>(this.host+"/findUserByLogin/" +login, {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

}
