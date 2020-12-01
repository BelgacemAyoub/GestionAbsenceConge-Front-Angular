import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { GestionAbsenceComponent } from './pages/gestion-absence/gestion-absence.component';
import { GestionCongeComponent } from './pages/gestion-conge/gestion-conge.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { AuthComponent } from './auth/auth.component';
import { TrancatePipe } from './trancate.pipe';
import { DetailCongeComponent } from './detail-conge/detail-conge.component';







@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashbordComponent,
    ProfilUtilisateurComponent,
    GestionAbsenceComponent,
    GestionCongeComponent,
    MessagesComponent,
    ReclamationComponent,
    AddUserComponent,
    MatConfirmDialogComponent,
    AddCongeComponent,
    AddAbsenceComponent,
    AuthComponent,
    TrancatePipe,
    DetailCongeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  entryComponents:[AddUserComponent,MatConfirmDialogComponent]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
