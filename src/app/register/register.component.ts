import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer =
    {
      "name": "",
      "address": {
        "flatNo": "",
        "buildingName": "",
        "area": "",
        "city": ""
      },
      "email": "",
      "password": "",
      "phoneNumber": ""
    }
    emailObj = {
      "destEmail":"",
      "message":"",
      "subject":""
    }
  constructor(private service: DataService,
    private router: Router) { }

  ngOnInit() {
  }
  onRegistration(formData) {
    this.customer = {
      "name": formData.form.value.name,
      "address": {
        "flatNo": formData.form.value.flatNo,
        "buildingName": formData.form.value.buildingName,
        "area": formData.form.value.Area,
        "city": formData.form.value.City
      },
      "email": formData.form.value.email,
      "password": formData.form.value.password,
      "phoneNumber": formData.form.value.phoneNumber
    }
    this.emailObj = {
      "destEmail":formData.form.value.email,
      "message":"Welcome to Rosewood !" + formData.form.value.name + " Enjoy your time.",
      "subject":"Welcome to Rosewood"
    }
    this.service.sendEmail(this.emailObj).subscribe((res)=>{
      console.log(res)
    })
    this.service.addCust(this.customer).subscribe((res) => {
      alert("Registration Done Successfully!")
      this.router.navigate(['/home/login'])
    })
  }
}
