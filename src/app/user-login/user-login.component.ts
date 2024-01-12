import { Component, NgZone, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { Route, Router } from '@angular/router';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',

})
export class UserLoginComponent implements OnInit{
 
  constructor(private service: AppService, matIconRegistry: MatIconRegistry, private router : Router, private zone:NgZone) {matIconRegistry.registerFontClassAlias('fontawesome', 'fa'); }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginGroup = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl(),
    }
  )
 value: any 
  loginUser() {

    console.log(this.loginGroup.value)
    this.service.loginUser(this.loginGroup.value).subscribe(
      data => { 
        if(data.status == "201"){
          localStorage.setItem("token", JSON.stringify(data.data));
         alert("login successful")
          this.router.navigate(['dashboard'])

        }
     })
     
  }
}
