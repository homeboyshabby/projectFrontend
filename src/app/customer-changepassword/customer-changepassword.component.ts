import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-changepassword',
  templateUrl: './customer-changepassword.component.html',
  styleUrls: ['./customer-changepassword.component.css']
})
export class CustomerChangepasswordComponent implements OnInit {
  user: any;
  constructor(private service: DataService,private router:Router) { }

  ngOnInit() {
    let obs = this.service.getMyProfile(parseInt(localStorage.getItem("id")));
    obs.subscribe((res) => {
      this.user = res;
    })
  }
  onChangePassword(formDate) {
    let custObj = formDate.form.value;
    if(formDate.form.value.newpassword == 0)
    {
      alert('Enter New Password first')
    }
    else
    {
      this.service.changeMyPassword(custObj).subscribe((res) => {
      });
      alert("Password Changed Successfully!")
      this.router.navigate(['/customer/changepassword']);
    }
  }
}
