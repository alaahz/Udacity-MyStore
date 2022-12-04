import { Injectable } from '@angular/core';
import {CartModel} from '../../model/cartModel'
@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems:CartModel[]= []
  orderInfo:any=[]

  constructor() { }


  addToCart(item:CartModel){
    /* before add product to cart, you must check if there is cart in the localStorage,
    get all the products in the localStorage plus the add the new product to cart.
    */
    if('cart' in localStorage){
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')!)  

      this.cartItems.push(item)
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }else{
      // if there is not cart in localStorage, puch the product to cart array and set cart in localStorage
      this.cartItems.push(item)
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }


  }

  getCartItems(){
    // the cart items are stored in localStorage, this will prevent to lose cart items when user reload the page
    return  this.cartItems = JSON.parse(localStorage.getItem('cartItems')!)

  }

  // remove the product from cart when user click on remove button
  remove(index:number){
    this.cartItems.splice(1,index);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

  // clear cart items fro localStorage when user submit the payment details
  clearCart(){
    localStorage.removeItem('cartItems')
    return this.cartItems=[]

  }

  // calculate the total price
  getTotal(){
    let total=0;
    this.cartItems.map(item=>{  
      let productPrice = Number(item.price);
      let productQun = Number(item.quantity);
      let t = productPrice * productQun
      total+=t
    })
    return total
  }

  // to store user name, address and total in orderInfo to used in confirmation page
  setOrderInfo(info:any){
    this.orderInfo= info
  }
  
  // send the order info to confirmation page
  getOrderInfo(){
    return this.orderInfo
  }
}
