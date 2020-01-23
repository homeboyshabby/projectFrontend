import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  userDtls:any;
  name = "";
  constructor(private router: Router,private service:DataService) { }

  ngOnInit() {
    // this.service.getMyProfile(parseInt(localStorage.getItem("id"))).subscribe((res)=>{
    //   this.userDtls = res;
    //   this.name = this.userDtls.name;
    // })
  }

  onLogout() {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }
}
