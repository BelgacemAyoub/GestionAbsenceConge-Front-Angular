import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from '../model/absence.model';
import { User } from '../model/user.model';
import { AbsenceService } from '../services/absence.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.css']
})
export class AddAbsenceComponent implements OnInit {


  absence: Absence;
  edit_mode: string;
  user = new User(1,'user','user','Baha','Zaghdoudi','zagdoudi@gmail.com','98654321',true,null,null,null,null,0);
  editValue = new Absence(-1, null ,null , null);
  id:number;

  @ViewChild('formulaire') formulaire : NgForm;
  constructor(private route: ActivatedRoute,
              private absenceService: AbsenceService,
              private router: Router,
              private dialog: DialogService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(qp => {
      this.edit_mode = qp['edit_mode'];
    },err =>{
      console.log(err);
      
    });

    if (this.edit_mode == "modifier") {
      this.route.params.subscribe (
        params => {
          this.id = params ['id']
        }
      );
      this.absenceService.getAbsenceById(this.id).subscribe(
        absence => {
          this.editValue = absence;
          console.log(this.editValue);
        },
        error => {
          console.log(error);  
        }

      )
    }
  }

  saveAbsence() {
    this.absence = this.formulaire.form.value;
    
    const datedeb =new Date(this.formulaire.form.get('dateDebut').value.year,
                            this.formulaire.form.get('dateDebut').value.month -1, 
                            this.formulaire.form.get('dateDebut').value.day +1);
    const dateF =new Date(this.formulaire.form.get('dateFin').value.year,
                          this.formulaire.form.get('dateFin').value.month -1, 
                          this.formulaire.form.get('dateFin').value.day +1);
    
    this.absence.dateDebut = datedeb;
    this.absence.dateFin = dateF;
    this.absence.user = this.user;
    
    if (this.edit_mode == 'modifier') {
      this.absence.id = this.id;
    }

    this.absenceService.saveAbsence(this.absence).subscribe(
      response => {
        const link = ['home/absence'];
        this.router.navigate(link);
        console.log(response);
      },
      error => {
        console.log(error);

      }
    )
  }

  onClear() {
    this.formulaire.reset();
  }
  onDelete() {
    this.dialog.openConfirmDialog('Vous êtes sure de supprimer cette absence ?')
      .afterClosed().subscribe(
        res => {
          if (res) {
            this.absenceService.deleteAbsence(this.id).subscribe(
              response => {
                const link = ['home/absence'];
                this.router.navigate(link);
                console.log(response);
              }
            );

          }

        });
  }
}
