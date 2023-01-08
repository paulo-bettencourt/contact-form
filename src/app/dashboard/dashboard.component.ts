import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Login } from '../interfaces/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataUsername!: Login;
  dataPassword!: Login;

  constructor(private route: ActivatedRoute, private loginService: LoginService) {}

  ngOnInit(): void {
    this.dataUsername = this.route.snapshot.data['login'].username;
    this.dataPassword = this.route.snapshot.data['login'].password;
    };


}


