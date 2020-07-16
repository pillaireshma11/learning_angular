import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navs:any;
  rest: any;
  
  constructor(private reest:RestService) { }

  ngOnInit(): void {
   
  
  }
 
}
