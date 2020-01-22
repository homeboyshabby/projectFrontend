import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tables',
  templateUrl: './add-tables.component.html',
  styleUrls: ['./add-tables.component.css']
})
export class AddTablesComponent implements OnInit {
  currentTableCount: any;
  nextId = 0;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.service.getCurrentTableCount().subscribe((res) => {
      this.currentTableCount = res;
      this.nextId = this.currentTableCount + 1;
    })
  }

  onAddTable(formData) {
    let tableObj = formData.form.value;
    if (tableObj.noOfChairs != "") {
      this.service.addTable(tableObj).subscribe((res) => {
      })
    } else {
      alert("enter number of chairs first!")
    }
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/addtables']);
    });
  }

}
