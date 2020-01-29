import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  userDtls:any;
  name = "";
  constructor(private router: Router,private service:DataService,private toster:ToastrService) { }

  ngOnInit() {
    // this.service.getMyProfile(parseInt(localStorage.getItem("id"))).subscribe((res)=>{
    //   this.userDtls = res;
    //   this.name = this.userDtls.name;
    // })
    //this.toster.success("User Logged In!");
  }

  onLogout() {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }
}
