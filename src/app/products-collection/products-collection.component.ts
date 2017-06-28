import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

import { Product } from '../product';
import { ProductFilter } from '../product-filter';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-collection',
  templateUrl: './products-collection.component.html',
  styleUrls: ['./products-collection.component.css']
})
export class ProductsCollectionComponent implements OnDestroy, OnInit {

  @Input() products: Product[];
  sortProperty: string;
  

  private _filterStream$: Subject<ProductFilter> = new Subject;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._filterStream$
      .switchMap((filter: ProductFilter) => this._productService.getProducts(filter))
      .subscribe((products: Product[]) => this.products = products);
    this.filterCollection(null);
    this.sortProperty='publishedDate';
  }

  ngOnDestroy(): void {
    this._filterStream$.unsubscribe();
  }

  filterCollection(filter: ProductFilter): void {

console.log(filter);
    this._filterStream$.next(filter);
    
  }

  sortCollection(sortProperty: string): void{
    this.sortProperty=sortProperty;
   
  }


}
