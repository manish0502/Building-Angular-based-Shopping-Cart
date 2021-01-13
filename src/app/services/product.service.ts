import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // TODO: populate the products from API

  products : Product[] = [

    new Product(1,'product-1','This product is really Good', 500),
    new Product(2,'product-2','This product is not bad', 200),
    new Product(3,'product-3','This product is awesome', 520),
    new Product(4,'product-4','This product is cool', 400),
    new Product(5,'product-5','This product is ok ok', 450),
    new Product(6,'product-6','This product is great', 432),
    new Product(7,'product-7','This product is best', 400),

  ];
  

  constructor() { }
 
    // TODO: populate the products from API and return Observable

  getProducts(): Product[] {

    return this.products;
  }
}
