import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
   getProducts():Observable<[]>{

    return this.http.get<[]>('https://fakestoreapi.com/products')
  
}
getProductById(id:any){
  return this.http.get('https://fakestoreapi.com/products/'+id)

}

}
