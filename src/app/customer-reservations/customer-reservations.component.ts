import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-reservations',
  templateUrl: './customer-reservations.component.html',
  styleUrls: ['./customer-reservations.component.css']
})
export class CustomerReservationsComponent implements OnInit {
  reservations: any;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(localStorage.getItem('id'));
    let custObj = { "id": id }
    let obs = this.service.getMyReservations(custObj);
    obs.subscribe((res) => {
      this.reservations = res;
    })
  }

  deleteMyReservation(id) {
    let reservationId = { "resId": id }
    this.service.deleteMyReservations(reservationId).subscribe((res) => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/customer/myreservations']);
      });
    })
  }
}
