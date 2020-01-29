import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  email = '';
  password = '';
  user: any;
  count = 0;
  constructor(private router: Router,
    private service: DataService) {
  }
  ngOnInit() {
    sessionStorage.setItem("wcount", this.count.toString());
  }
  onLogin(entireData) {
    // debugger
    let empObj = entireData.form.value;
    this.email = empObj.employeeEmail;
    this.password = empObj.employeePassword;
    if (this.email.length == 0) {
      alert('Enter Email');
    } else if (this.password.length == 0) {
      alert('Enter Password');
    } else {
      this.service.checkLoginCredentailsWithDBForEmp(empObj).subscribe((res) => {
        this.user = res;
      })

      if (this.user.employeeEmail == this.email) {
        localStorage.setItem('email', empObj.email);
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('flag', 'true');
        if (this.user.role == "WAITER") {
          sessionStorage['w_login_status'] = '1';
          sessionStorage['role'] = 'w';
          this.router.navigate(['/waiter']);
        } else if (this.user.role == "MANAGER") {
          sessionStorage['m_login_status'] = '1';
          sessionStorage['role'] = 'm';
          this.router.navigate(['/manager']);
        } else if (this.user.role == "ADMIN") {
          sessionStorage['a_login_status'] = '1';
          sessionStorage['role'] = 'a';
          this.router.navigate(['/admin']);
        } else if (this.user.role == "DELIVERYBOY") {
          sessionStorage['d_login_status'] = '1';
          sessionStorage['role'] = 'd';
          this.router.navigate(['/dboy']);
        }
      }
    }
  }
}
