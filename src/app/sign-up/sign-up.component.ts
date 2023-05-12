import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  password: any;
  name: any;
  email:any


  constructor(public router: Router) {
   
}

  
  onSubmit() {
    console.log('Registration form submitted!');
    console.log(`Name: ${this.name}`);
    console.log(`Password: ${this.password}`);
    
  }
  ngOnInit(): void {
  }

}
