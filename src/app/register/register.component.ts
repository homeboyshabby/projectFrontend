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

    name = '';
    email = '';
    password = '';
    phoneNumber = '';
    flatNo = '';
    buildingName = '';
    area = '';
    city = '';


  constructor(private service: DataService,
    private router: Router) { }

  ngOnInit() {
  }
  onRegistration(formData) {

    let cust = formData.form.value;
    // debugger;

    this.name = formData.form.value.name;
    this.email = formData.form.value.email;
    this.phoneNumber = formData.form.value.phoneNumber;
    this.password = formData.form.value.password;
    this.flatNo = formData.form.value.flatNo;
    this.buildingName = formData.form.value.buildingName;
    this.area = formData.form.value.area;
    this.city = formData.form.value.city;

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


    if(this.name.length == 0 ||
      this.email.length == 0 ||
      this.password.length == 0 ||
      this.phoneNumber.length == 0 ||
      this.flatNo.length == 0 ||
      this.buildingName.length == 0 ||
      this.area.length == 0 ||
      this.city.length == 0) 
   {
    if(this.name.length == 0) {
      alert('Enter Name');
    }
     else if(this.email.length == 0)
     {
       alert('Enter Email');
     }
     else if (this.phoneNumber.length == 0 || this.phoneNumber.length != 10)
     {
       if(this.phoneNumber.length == 0)
       {
         alert('Enter Phone Number');
       }
       else
       {
         alert('Enter 10 digit Phone Number');
       }
     }
     else if(this.password.length == 0)
     {
       alert('Enter Password');
     }
     else if(this.flatNo.length == 0)
     {
       alert('Enter flatNo');
     }      
     else if(this.buildingName.length == 0)
     {
       alert('Enter buildingName');
     }
     else if(this.area.length == 0)
     {
       alert('Enter area');
     }
     else if(this.city.length == 0)
     {
       alert('Enter city');
     }
   }

   if(this.name.length != 0 &&
    this.email.length != 0 &&
    this.password.length != 0 &&
    this.phoneNumber.length != 0 &&
    this.flatNo.length != 0 &&
    this.buildingName.length != 0 &&
    this.area.length != 0 &&
    this.city.length != 0)
    {
      this.service.sendEmail(this.emailObj).subscribe((res)=>{
        console.log(res)
      })
      this.service.addCust(this.customer).subscribe((res) => {
        alert("Registration Done Successfully!")
        this.router.navigate(['/home/login'])
      })
    } 
    // this.service.sendEmail(this.emailObj).subscribe((res)=>{
    //   console.log(res)
    // })
    // this.service.addCust(this.customer).subscribe((res) => {
    //   alert("Registration Done Successfully!")
    //   this.router.navigate(['/home/login'])
    // })
  }
}
