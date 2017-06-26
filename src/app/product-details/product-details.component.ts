import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ConfirmationService } from 'primeng/primeng';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy, OnInit {

  product: Product;
  productLiked: boolean;
  private _productSubscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this._route.data.forEach((data: { product: Product }) => {
      this.product = data.product;
      if (this.getVariableLocalStorage("like" + this.product.id) === "true"){
        this.productLiked=true;
      }else{
        this.productLiked = false;
      }
      });
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    if (this._productSubscription !== undefined) {
      this._productSubscription.unsubscribe();
    }
  }
  saveLike(like: boolean): void {
    this.setVariableLocalStorage("like" +  this.product.id, like);
  }
  private _buyProduct(): void {
    this._productSubscription = this._productService
      .buyProduct(this.product.id)
      .subscribe(() => this._showPurchaseConfirmation())
  }

  private _showPurchaseConfirmation(): void {
    this._confirmationService.confirm({
      rejectVisible: false,
      message: 'Producto comprado. ¡Enhorabuena!',
      accept: () => this._router.navigate(['/product'])
    });
  }

  showPurchaseWarning(): void {
    this._confirmationService.confirm({
      message: `Vas a comprar ${this.product.name}. ¿Estás seguro?`,
      accept: () => this._buyProduct()
    });
  }

  goBack(): void {
    window.history.back();
  }
  setVariableLocalStorage(key: string, value: any): void {
    if (typeof(Storage) !== "undefined") {
      // Setter
      localStorage.setItem(key, value);
    
    }
  }
  getVariableLocalStorage(key: string): string {
    if (typeof(Storage) !== "undefined") {
      // Getter
      return localStorage.getItem(key);
    }
  }
}

