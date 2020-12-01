import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Absence } from 'src/app/model/absence.model';
import { AbsenceService } from 'src/app/services/absence.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-gestion-absence',
  templateUrl: './gestion-absence.component.html',
  styleUrls: ['./gestion-absence.component.css']
})
export class GestionAbsenceComponent implements OnInit {
  absenceList: Absence [];
  isAuth : boolean;

  constructor(private absenceSerice : AbsenceService,
              private router: Router,
              private authService : AuthenticationService
              ) { }

  ngOnInit(): void {
    this.absenceSerice.loadAbsences().subscribe (
      resp => {
        this.absenceList = resp;
        console.log(resp);  
      },
      error => {
        console.log(error); 
      }
      );
  }

  toAddAbsence(){
    this.router.navigate(['/home/addAbsence'],{queryParams:{'edit_mode':'ajouter'}})
  }

  editAbsence(id:number) {
    this.router.navigate(['/home/addAbsence', id] ,{queryParams:{'edit_mode':'modifier'}})
  }

}
