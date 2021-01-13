import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  productList: Product[] =[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

      //  console.log(this.productService.getProducts())  
       this.productService.getProducts().subscribe((products)=> {
          this.productList=products;
       });
      }

}
