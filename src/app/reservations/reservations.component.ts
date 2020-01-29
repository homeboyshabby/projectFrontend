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

    let ppl = formData.form.value.resNumberOfPeople;
    let date = formData.form.value.resDate;

    if( ppl <= 0 || date == "")
    {
      if(ppl <= 0)
      {
        alert('Enter valid No. of ppl');
      }
      else
      {
        alert('Enter Date');
      }
    }

    if(ppl > 0 && date != "")
    {
      this.service.addMyReservation(resObj, parseInt(localStorage.getItem("id"))).subscribe((res) => {
      })
      alert("new reservation added!")
      this.router.navigate(['/customer/myreservations']);
    }
  }

}
