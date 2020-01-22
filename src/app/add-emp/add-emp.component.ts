import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  role = "";
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
  }
  onAddEmp(formdata) {
    let empObj = formdata.form.value;
    if (empObj.employeeName != "" && empObj.employeeEmail != "" && empObj.employeePassword != "") {
      this.service.addEmp(empObj, this.role).subscribe((res) => {
      })
      alert("Employee Added")
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/updateemp']);
      });
    }
    else {
      alert("fill all details")
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/addemp']);
      });
    }
  }
  change(event) {
    this.role = event.target.value
  }
}
