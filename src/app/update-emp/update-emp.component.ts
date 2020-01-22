import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  emps: any;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.service.showEmp().subscribe((res) => {
      this.emps = res;
    })
  }
  goToAddEmp() {
    this.router.navigate(['/admin/addemp']);
  }
}
