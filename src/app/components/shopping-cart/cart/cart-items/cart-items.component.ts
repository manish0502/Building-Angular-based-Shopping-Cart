import { Component, OnInit ,Input } from '@angular/core';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input() cartItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
