import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../services/dialog.service';
import { Conge } from '../model/conge.model';
import { CongeService } from '../services/conge.service';
import { User } from '../model/user.model';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {

  conge: Conge ; 
  edit_mode: string;
  id: number;
  userAuthenticated = new User(-1,'','','','','','',false,null,null,null,null,0);
  editValue = new Conge(null,null,null,'',false,false,null);


  @ViewChild('formulaire') formulaire : NgForm;
  
  constructor(private congeService: CongeService,
              private router: Router,
              private route : ActivatedRoute,
              private dialog : DialogService,
              public authService : AuthenticationService,
               ) { }

  ngOnInit(): void {
    this.authService.getLogin();
    this.userAuthenticated = this.authService.getUserAuthenticated();

    this.route.queryParams.subscribe(qp =>{
      this.edit_mode = qp['edit_mode'];
    });

    if(this.edit_mode == "modifier"){
      this.route.params.subscribe(params =>{
        this.id= params['id']
        });
      this.congeService.getCongeById(this.id).subscribe (
        conge => {
          this.editValue = conge;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  saveConge(){
    this.conge = this.formulaire.form.value;  
  
    /* Covert DatePicker to Date */
    const datedeb = this.toDate(this.formulaire.form.get('dateDebut').value);
    const dateF = this.toDate(this.formulaire.form.get('dateFin').value)
    this.conge.dateDebut = datedeb;
    this.conge.dateFin = dateF;
    this.conge.user = this.userAuthenticated;
    console.log(this.userAuthenticated);
    console.log(this.conge.user);
    
    
    
     if(this.edit_mode == 'modifier'){
        this.conge.id = this.id; 
      }

      

      this.congeService.saveConge(this.conge).subscribe (
        response => {
          this.router.navigate (['home/conge']);
        },
        error=> {
         console.log(error);
        }
        );
  }

  onClear() {
    this.formulaire.reset();
  }

  onDelete(){
    this.dialog.openConfirmDialog('Vous êtes sure de supprimer ce congé ?')
      .afterClosed().subscribe(res =>{
        if(res){
          this.congeService.deleteConge(this.id).subscribe(
            response =>{
            this.router.navigate (['home/conge']);
          });
        }
    });
  }
 
  toDate(date : NgbDate): Date{
    return new Date(date.year,
                    date.month -1, 
                    date.day +1);
  }

  accepter(){
    console.log(this.editValue);
    
    
    this.congeService.acceptConge(this.editValue,this.editValue.user.login).subscribe(resp =>{
      this.router.navigate (['home/conge']);
    },err =>{console.log(err);
    })
  }

}
