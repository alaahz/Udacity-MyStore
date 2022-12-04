import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../services/product.service'
import {CartService} from '../../app/services/cart.service'
import {CartModel} from '../../model/cartModel'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  product :any={};
  productId:any;
  quantity:number=1;
  

  //loading for user expreince to know that the data is loading from server.
  loading:boolean = false;
  constructor(private route:ActivatedRoute,private productService:ProductService,private cartService: CartService){
  
  // use ActivatedRoute to access id from url
  this.productId = this.route.snapshot.paramMap.get('id')

  }

  ngOnInit():void {
    this.getProduct()
    
  }
  getProduct(){
    this.loading = true
    this.productService.getProductById(this.productId).subscribe(res =>{
      this.loading=false
      this.product= res
    })
  }
  addToCart(product: CartModel) {
    const cart ={
      id : product.id,
      title:product.title,
      price:product.price,
      category:product.category,
      description:product.description,
      image:product.image,
      quantity:this.quantity,
    }
    this.cartService.addToCart(cart);  
  }
 
}
