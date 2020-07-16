import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
firstname;lastname;username;password;role;email;address;city;state;country;phone;

  constructor(private reest:RestService,private router: Router) { }

  ngOnInit(): void {
    
  }
  // addProduct(){
  //   this.reest.addProduct({firstname:'',lastname:''})
     
    
  // }
  
      
  add() {
    this.router.navigate(['/list']);
  }
  addProduct() {
    this.reest.addProduct({ "firstName": this.firstname,
      "lastName": this.lastname,
      "userName": this.username,
      "password": this.password,
      "role": this.role,
      "email": this.email,
      "address": this.address,
      "city": this.city,
      "state": this.state,
      "country": this.country,
      "phone": this.phone
    }).subscribe((result) => {
      // console.log(`${alert}saved`);
      alert("success");
      // this.router.navigate(['/list']);
    }, (err) => {
      console.log(err);
    });
  
 
  } 
  
 }

