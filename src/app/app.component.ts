import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router ,Route,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flights_app';
  newdata: any;
  constructor(public router: Router) { }
  
}
