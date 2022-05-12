import { Component, OnInit } from '@angular/core';
import { IStore } from 'src/app/Models/istore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    storeHome : IStore;
  constructor() {
    this.storeHome={
      name:"Electronics Store",
     // imgURL:"https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/612edb395b802f2ee62dcaf0_logo_b18b180e-229e-43a7-9db4-ccc0e8d19a76.png" , 
     imgURL:"assets/logo.png",
     branches:["Assuit" ,"Sohag"]
    }
   }

  ngOnInit(): void {
  }

}
