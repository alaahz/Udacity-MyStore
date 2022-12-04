import { Component} from '@angular/core';
import {ProductType} from '../../model/productType';
import {CartService} from '../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  emptyCart='assets/empty.png'
  isEmpty:boolean= false;
  items : ProductType []=[];
  total : number =0;
  name:string='';
  address:string='';
  ccn:string='';

  
  constructor(private cartService: CartService,private router: Router){

  }
  ngOnInit(){

    if(localStorage.getItem('cartItems')=== null){
      this.isEmpty= true
    }else{
      this.items = this.cartService.getCartItems()
      this.total= Number(this.cartService.getTotal().toFixed(2))
    }


  }
  minsQua(index : number){
    if(this.items[index].quantity === 1){
      this.total= Number(this.cartService.getTotal().toFixed(2))
    }
    else{

      this.items[index].quantity = Number(this.items[index].quantity) -1
      localStorage.setItem('cartItems', JSON.stringify(this.items))  
      this.total= Number(this.cartService.getTotal().toFixed(2))

    }
  }

  plusQua(index: number){
    this.items[index].quantity = Number(this.items[index].quantity) +1
    localStorage.setItem('cartItems', JSON.stringify(this.items))  
    this.total= Number(this.cartService.getTotal().toFixed(2))
  }
  removeProduct(index:number){
    this.items.splice(index,1);
    localStorage.setItem('cartItems', JSON.stringify(this.items))
    this.total= Number(this.cartService.getTotal().toFixed(2))
  }

  enterFormData(data:any){
    const userData ={
      ...data,
      total:this.total= Number(this.cartService.getTotal().toFixed(2))
    }
    console.log('from cart',userData)
    this.cartService.clearCart()
    this.cartService.setOrderInfo(userData)
    this.router.navigate(['/confirmation']);
  }


}
