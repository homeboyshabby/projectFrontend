import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private service: DataService, private router: Router,private toster:ToastrService) { }

  ngOnInit() {
    let obs = this.service.getMenu();

    obs.subscribe((res) => {
      this.menu = res;
    })
  }

  onAddItem(formData) {

    let obj = formData.form.value;

    if (obj.itemDesc == "" || obj.itemName == "" || obj.itemPrice == "") {
      if (obj.itemDesc == "") {
        alert('Enter Item Name')
      }
      if (obj.itemName == "") {
        alert('Enter Item Description')
      }
      else {
        alert('Enter Item Price')
      }
    }

    if (obj.itemDesc != "" && obj.itemName != "" && obj.itemPrice != "") {
      this.service.addMenuItems(obj).subscribe((res) => {
      })

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.toster.success("New Item Added " + obj.itemDesc + " with price of " + obj.itemPrice);
        this.router.navigate(['/admin/addmenu']);
      });
    }
  }
}
