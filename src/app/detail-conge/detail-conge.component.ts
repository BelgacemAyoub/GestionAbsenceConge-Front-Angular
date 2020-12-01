import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from '../model/conge.model';
import { User } from '../model/user.model';
import { CongeService } from '../services/conge.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-conge',
  templateUrl: './detail-conge.component.html',
  styleUrls: ['./detail-conge.component.css']
})
export class DetailCongeComponent implements OnInit {

   id : number;
   conges : Conge[]=[];
   user : User;
  
   constructor(private userService : UserService,
               private route : ActivatedRoute,
               private router: Router) {}
  
   ngOnInit(): void {
      this.route.params.subscribe(params =>{
      this.id = params['id']; });

      this.user = this.userService.findUserById(this.id);
      this.conges = this.user.conges;
      console.log(this.conges);   
   }

   toAddConge(){
      this.router.navigate(['/home/addConge'],{queryParams:{'edit_mode':'ajouter'}})
   }
  
   editConge(id:number) {
      this.router.navigate(['/home/addConge', id] ,{queryParams:{'edit_mode':'modifier'}})
   }
  
  }
  