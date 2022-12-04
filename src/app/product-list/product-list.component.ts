import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductType} from '../../model/productType';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productsList: ProductType [] = [];

  loading:boolean = false;
  constructor(private productService:ProductService){}

  ngOnInit():void {
    this.loading = true;
    this.productService.getProducts().subscribe(res=>{
      this.loading=false
      this.productsList= res})
  }


  

}
