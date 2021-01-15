import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  productList: Product[] =[];
  wishlist:number[]=[];

  constructor(private productService: ProductService, private wishlistService:WishlistService) { }

  ngOnInit(): void {

       this.loadProducts();
       this.loadWishlist();

      }

    loadProducts(){

      this.productService.getProducts().subscribe((products)=> {
        this.productList=products;
     });
    }

    loadWishlist(){
          this.wishlistService.getWishlist().subscribe(productIds=> {
           // console.log(productIds);
            this.wishlist=productIds;
          })
    }

  
      

}
