import { Component ,Injectable,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  
  
export class DashboardComponent implements OnInit {
  flightdata: any;
  time = Date.now()
  show = true
  constructor(private http: HttpClient) { }
 


  async ngOnInit() {
    this.http.get('https://opensky-network.org/api/flights/all?begin=1682602755&end=1682609665')
     .subscribe((data: any) => {
       const f = { data }.data;
       console.log('this is the response', f)
       this.show = false
      this.flightdata = data;
    });   
  }
}

