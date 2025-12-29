import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
//product component class
export class Product {
  //products arrayine data store cheyyan
  products:any[]=[];
  //apiservice inject cheyyan
  constructor(private apiservice:Apiservice) {}
  //component load aayal data fetch cheyyan
  ngOnInit()
  {
    //assign the fetched data to products array
    this.apiservice.getProducts().subscribe((data: any) => {
      this.products = data;
      
    });
  } }