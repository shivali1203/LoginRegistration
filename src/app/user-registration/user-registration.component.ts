import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  constructor(private service : AppService, private router : Router){

  }
  userGroup  = new FormGroup({
    name :new FormControl(),
    email :new FormControl(),
    password :new FormControl(),
    birthDate : new FormControl()
   
  })
  addUser(){
    console.log(this.userGroup.value  )
    this.service.addUser(this.userGroup.value).subscribe(data=>{
      console.log(data);
     if(data.status==201){
      console.log("data stored")
      localStorage.setItem("token", JSON.stringify(data.data))
      this.router.navigate(['dashboard'])
     }
      
     })
  }
ngOnInit(){}
}
