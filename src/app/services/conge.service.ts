import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from '../model/conge.model';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private congeList : Conge[] = [];

  link="http://localhost:8080/api/conge"

  constructor(private http : HttpClient,
              private authService : AuthenticationService) {}

  loadConges(): Observable<Conge[]>{
     return this.http.get<Conge[]>(this.link+"/list", {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  saveConge(conge:Conge){
      return this.http.post(this.link+"/addConge", conge, {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );    
  }
  acceptConge(conge:Conge, login : string){
    return this.http.post(this.link+"/accept/"+login, conge, {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );    
}

  deleteConge(id : number){
    return this.http.delete(this.link+"/deleteConge/"+String(id), {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  getCongeById(id: number){
    return this.http.get<Conge>(this.link+"/findConge/"+String(id), {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }


}
