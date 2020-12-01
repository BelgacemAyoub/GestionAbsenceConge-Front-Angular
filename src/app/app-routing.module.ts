import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthComponent } from './auth/auth.component';
import { DetailCongeComponent } from './detail-conge/detail-conge.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { GestionAbsenceComponent } from './pages/gestion-absence/gestion-absence.component';
import { GestionCongeComponent } from './pages/gestion-conge/gestion-conge.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';

const routes: Routes = [
  {
    path:'home',children:[
    {path:'login', component: AuthComponent},
    {path:'user', component:ProfilUtilisateurComponent},
    {path:'addUser', component:AddUserComponent},
    {path:'addUser/:id', component:AddUserComponent},
    {path:'absence', component:GestionAbsenceComponent},
    {path:'addAbsence', component:AddAbsenceComponent},
    {path:'addAbsence/:id', component:AddAbsenceComponent},
    {path:'conge', component:GestionCongeComponent},
    {path:'addConge', component:AddCongeComponent},
    {path:'addConge/:id', component:AddCongeComponent},
    {path:'message', component:MessagesComponent},
    {path:'reclamation', component:ReclamationComponent},
    {path:'accueil', component:DashbordComponent},
    {path:'detailConge/:id', component:DetailCongeComponent},
  ]},
  {path:'', redirectTo : 'home/login', pathMatch:'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
