import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path = '';
  
  constructor(private router: Router, private location: Location) {}
 
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.path = this.location.path();
    });
  }
}
