import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-changepassword',
  templateUrl: './customer-changepassword.component.html',
  styleUrls: ['./customer-changepassword.component.css']
})
export class CustomerChangepasswordComponent implements OnInit {
  user: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    let obs = this.service.getMyProfile(parseInt(localStorage.getItem("id")));
    obs.subscribe((res) => {
      this.user = res;
    })
  }
  onChangePassword(formDate) {
    let custObj = formDate.form.value;
    //console.log(custObj)
    this.service.changeMyPassword(custObj).subscribe((res) => {
      alert("Password Changed Successfully!")
    });
  }
}
