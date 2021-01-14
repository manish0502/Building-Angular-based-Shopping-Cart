import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { wishListUrl } from 'src/app/config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  getWishlist() {
    return this.http.get(wishListUrl).pipe(
      map((result: any[]) => {
        let productIds = [];

        result.forEach((item) => productIds.push(item.id));
        return productIds;
      })
    );
  }

  addToWishlist(productid) {
    return this.http.post(wishListUrl, { id: productid });
  }

  removeFromWishlist(productid) {
    return this.http.delete(wishListUrl + '/' + productid);
  }
}
