import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  // reservation = {
  //   "resNumberOfPeople": "",
  //   "resDetails": "",
  //   "resDate": "",
  //   "custId": ""
  // }
  id = parseInt(localStorage.getItem("id"))
  constructor(private service:DataService) { }

  ngOnInit() {
  }
  addReservation(formData) {
    let resObj = formData.form.value;
    console.log(resObj)
    // this.reservation = {
    //   "resNumberOfPeople": resObj.resNumberOfPeople,
    //   "resDetails": resObj.resDetails,
    //   "resDate": resObj.resDate,
    //   "custId": localStorage.getItem(parseInt)
    // }
    this.service.addMyReservation(resObj,parseInt(localStorage.getItem("id"))).subscribe((res)=>{
      console.log(res);
    })
  }

}
