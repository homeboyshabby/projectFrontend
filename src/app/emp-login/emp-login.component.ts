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
  constructor(private router: Router,
    private service: DataService) {
  }
  ngOnInit() {
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
        console.log(this.user.role);
      })

      if (this.user.employeeEmail == this.email) {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('email', empObj.email);
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('flag', 'true');
        if (this.user.role == "WAITER") {
          this.router.navigate(['/waiter']);
        } else if (this.user.role == "MANAGER") {
          this.router.navigate(['/manager']);
        } else if (this.user.role == "ADMIN") {
          this.router.navigate(['/admin']);
        }
      }
    }
  }
}
