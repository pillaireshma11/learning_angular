import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productid:any;
  constructor(private reest:RestService) { }

  ngOnInit() {
    this.getOrder();
  }
  getOrder() {
    this.reest.getOrder().subscribe((response) => {
      if (response) {
        console.log(response);
        this.productid= response;
        // return this.productid || [];
        this.productid = Array.of(this.productid); 
      }
    });

  }
}
