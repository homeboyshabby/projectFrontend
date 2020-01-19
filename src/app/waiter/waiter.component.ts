import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogout()
  {
    //console.log("hi")
    this.router.navigate(['/']);
  }

}