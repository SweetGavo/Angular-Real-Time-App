import { Component ,OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
   console.log(this.myForm);
    if (this.myForm.valid) {
      this.router.navigateByUrl('/dashboard')
    } else {
      alert('Wrong Input! Please enter valid name and password')
    }
    
    
  }


  
  
}




  
