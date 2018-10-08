import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as AppActions from './store/actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  path = '';

  constructor(
    private router: Router,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.path = this.location.path();
    });

    this.store.dispatch(new AppActions.loadInitialData());
  }
}
