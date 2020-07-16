import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  submitted: boolean;
  myname="resh";role;email;address;city;phone;state;country;password;firstName;lastName;userName;
    name: any;
    productid:any;
    userpassword: any;
    userId;
    categryid:any;
  constructor(private reest:RestService ) { }
  onclick() {
    console.log(this.name); // Getting input values through ngModel propert
}
  ngOnInit(): void {
    this.getData();
    

  }
  onSubmit(value: any) {
    console.log(value.name);
 // Getting input values through form instance
}
// onClickSubmit() {
//   this.productid=1;
//   console.log(this.productid)
//   alert(  this.productid);
// }
getData(){
  this.reest.getData().subscribe((response)=>{
    if(response){
      console.log(response);
      this.productid=response;
    }
  });
}
getPr0duct(){
  this.reest.getPr0duct().subscribe((response)=>{
    if(response){
      console.log(response);
      // this.categryid=response;
    }
  });
}
updateProduct() {
   const product={"userId":this.userId,
     "firstName":this.firstName,
     "lastName":this.lastName,
     "username":this.userName,
     "role": this.role,
   "password":this.password,
    "email": this.email,
    "address": this.address,
    "city": this.city,
    "state": this.state,
    "country": this.country,
    "phone": this.phone}
    console.log(product);
  this.reest.updateProduct(product).subscribe((result) => {
    alert("Updated Succesfully");
  }, (err) => {
    console.log(err);
  });
}
addProduct() {
  this.reest.addProduct({ 
    "role": this.role,
    "password":this.password,
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
deleteProduct(id) {
  this.reest.deleteProduct(id)
    .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
    );
} 
setProduct(i){
this.userId=i.userId;
this.firstName=i.firstName;
this.lastName=i.lastName;
this.userName=i.userName;
this.role=i.role;
this.password=i.password;
this.email=i.email;
    this.address=i.address;
    this.city=i.city;
      this.state=i.state;
      this.country;
     this.phone=i.phone;
}
// deleteProduct(){
//   this.reest.deleteProduct({ 
//     "role": this.role,
//     "password":this.password,
//      "email": this.email,
//      "address": this.address,
//      "city": this.city,
//      "state": this.state,
//      "country": this.country,
//      "phone": this.phone
//   }).subscribe((result)=>{alert("deleted");
// },(err)=>{console.log(err);});
// }
}
