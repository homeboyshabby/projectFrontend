import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-editprofile',
  templateUrl: './customer-editprofile.component.html',
  styleUrls: ['./customer-editprofile.component.css']
})
export class CustomerEditprofileComponent implements OnInit {
  customer =
    {
      "id": "",
      "name": "",
      "address": {
        "flatNo": "",
        "buildingName": "",
        "area": "",
        "city": ""
      },
      "email": "",
      "password": "",
      "newpassword": "",
      "phoneNumber": ""
    }
  user: any;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    let obs = this.service.getMyProfile(parseInt(localStorage.getItem("id")));

    obs.subscribe((res) => {
      this.user = res;
      console.log(this.user)
    })
  }

  onEditProfile(formDate) {
    let custObj = formDate.form.value;
    this.customer.name = custObj.name;
    this.customer.email = custObj.email;
    this.customer.phoneNumber = custObj.phoneNumber;
    this.customer.address.flatNo = custObj.flatNo;
    this.customer.address.buildingName = custObj.buildingName;
    this.customer.address.area = custObj.area;
    this.customer.address.city = custObj.city;
    this.service.setMyProfile(this.customer).subscribe((res) => {
    });
    alert("Profile Updated Successfully!")
    this.router.navigate(['/customer/editmyprofile']);
  }
}
