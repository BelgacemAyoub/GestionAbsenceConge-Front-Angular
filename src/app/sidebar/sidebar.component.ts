import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public authService: AuthenticationService,
              private router : Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.authService.logout(); 
    this.router.navigate(['/home/login']);
  }

}
