import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: any = [];
  httpdata;
  data;
  title = 'connection';
  // constructor(private httpClient: HttpClient) { }
  ngOnInit() {
   
    
 
}}
