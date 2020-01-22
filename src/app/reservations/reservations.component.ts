import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  id = parseInt(localStorage.getItem("id"))
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
  }
  addReservation(formData) {
    let resObj = formData.form.value;
    this.service.addMyReservation(resObj, parseInt(localStorage.getItem("id"))).subscribe((res) => {
    })
    alert("new reservation added!")
    this.router.navigate(['/customer/myreservations']);
  }

}
