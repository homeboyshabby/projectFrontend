import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delboy',
  templateUrl: './delboy.component.html',
  styleUrls: ['./delboy.component.css']
})
export class DelboyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogout() {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }

}
