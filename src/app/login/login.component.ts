import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  user: any;
  count = 0;
  constructor(private router: Router,
    private service: DataService,private toster:ToastrService) {
  }

  ngOnInit() {
    sessionStorage.setItem("count", this.count.toString());
  }

  onLogin(entireData) {
    let custObj = entireData.form.value;
    this.email = custObj.email;
    if (this.email.length == 0) {
      alert('Enter Email');
    } else if (this.password.length == 0) {
      alert('Enter Password');
    } else {
      this.service.checkLoginCredentailsWithDB(custObj).subscribe((res) => {
        this.user = res;
        
      })

      if (this.user.email == this.email) {
        sessionStorage['c_login_status'] = '1';
        sessionStorage['role'] = 'c';
        localStorage.setItem('email', custObj.email);
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('flag', 'true');
        this.toster.success("Hi! " + this.user.name);
        this.router.navigate(['/customer/']);
      }
      else {
        alert("invalid login");
        this.router.navigate(['']);
      }

    }
  }
  onRegister() {
    this.router.navigate(['/home/register']);
  }
  empLogin() {
    this.router.navigate(['/home/employee']);
  }
}
