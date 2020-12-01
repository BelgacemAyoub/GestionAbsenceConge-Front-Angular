import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../model/absence.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private absenceList : Absence[] = []; 

  constructor(private httpClient : HttpClient,
              private authService : AuthenticationService) { }

  loadAbsences() : Observable<Absence[]> {
    return this.httpClient.get<any>("http://localhost:8080/api/absence/list", {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  saveAbsence(absence: Absence) {
    return this.httpClient.post("http://localhost:8080/api/absence/addAbsence", absence, {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  deleteAbsence(id: number) {
    return this.httpClient.delete("http://localhost:8080/api/absence/deleteAbsence" + `/${id}`, {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  getAbsenceById(id: number) {
    return this.httpClient.get<Absence>("http://localhost:8080/api/absence/findAbsence" + `/${id}`, {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  } 
}
