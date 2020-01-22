import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menu: any;
  // name = "";
  // desc = "";
  // price = "";
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    let obs = this.service.getMenu();

    obs.subscribe((res) => {
      this.menu = res;
    })
  }

  onAddItem(formData) {
    let obj = formData.form.value;
    if (obj.itemDesc != "" && obj.itemName != "" && obj.itemPrice != "") {
      this.service.addMenuItems(obj).subscribe((res) => {
      })
    }
    else {
      alert("please fill all fields!")
    }
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/addmenu']);
    });
  }
}
