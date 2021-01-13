import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {

    //  mapping to the obtained results to our cartItem props. pipe() and map() will be used
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[]) =>{
        let cartItems:CartItem[] =[];
       
        for(let item of result){

          let productExists = false;
          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }
      
          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product))
          }
        }
     


        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {

    return this.http.post<any>(cartUrl,{ product });


  }
}
