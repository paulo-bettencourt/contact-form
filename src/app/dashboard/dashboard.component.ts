import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  dataUsername: any;
  dataPassword: any;

  constructor(private route: ActivatedRoute, private loginService: LoginService) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    this.dataUsername = this.route.snapshot.data['login'].username;
    this.dataPassword = this.route.snapshot.data['login'].password;
    console.log("resolver", this.data)
    console.log("USERNAMEEEE", this.dataUsername)


    };


}


