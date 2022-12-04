import { Component ,Input,Output,EventEmitter } from '@angular/core';
import {ProductType} from '../../model/productType'
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../services/product.service'
import {CartService} from '../../app/services/cart.service'
import {CartModel} from '../../model/cartModel'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: ProductType;
  quantity:number=1;


  constructor(private route:ActivatedRoute,private productService:ProductService,private cartService: CartService    ){
    this.product ={
      id:0,
      title:'',
      price:0,
      category:'',
      description:'',
      image:'',
      quantity :0
    }

  }
  ngOnInit() {
    
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
    alert("Product added successfully to cart");
  }

}
