import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    // { id:1 ,productId:1, productName: 'Test1' , qty:1 , price:100},
    // { id:2 ,productId:2, productName: 'Test2' , qty:2 , price:100},
    // { id:3 ,productId:3, productName: 'Test3' , qty:3 , price:100},
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }
  addProductToCart(product: Product) {


    //checking whether id exist or not

    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists=true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 3,
        price: product.price,
      });
    }

    //------------------alternative of above code -----------------

    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 3,
    //     price: product.price,
    //   });
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++;
    //       break;
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 3,
    //         price: product.price,
    //       });
    //     }
    //   }
    // }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
