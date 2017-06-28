import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';
import { ProductFilter } from './product-filter';
import { ProductService } from './product.service';

@Injectable()
export class SellerProductsResolveService implements Resolve<Product[]> {
  constructor(private _productService: ProductService){}
  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {

    let filter: ProductFilter={
      user: route.params['userId']
    }
    return this._productService.getProducts(filter);
   
  }

}
