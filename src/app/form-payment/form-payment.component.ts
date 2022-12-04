import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.css']
})
export class FormPaymentComponent {

 @Output() enterFormData :EventEmitter<any>= new EventEmitter();
 name:string='';
 address:string='';
 ccn:string='';



 onSubmit(){
  const data = {
    name:this.name,
    address:this.address,
    ccn:this.ccn
  }
  console.log('form ',data)
  this.enterFormData.emit(data)
 }





}
