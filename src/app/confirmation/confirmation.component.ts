import { Component } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  orderSuccessed :any =[]
  constructor(private cartService: CartService){
    this.cartService.getOrderInfo()
  }
  ngOnInit(){
    this.orderSuccessed = this.cartService.getOrderInfo()
  }
}
