import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Product } from '../product';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products-by-seller',
  templateUrl: './products-by-seller.component.html',
  styleUrls: ['./products-by-seller.component.css']
})
export class ProductsBySellerComponent implements OnInit {
  products: Product[];
  user: User;
  userServiceSubscribe: Subscription;
  
  constructor(private _route: ActivatedRoute,
              private _userService: UserService) { }

  ngOnInit() {
     this._route.params.subscribe((params) => {
       let userId = +params["userId"];
        this.userServiceSubscribe = this._userService.getUser(userId)
                                        .subscribe((data) =>{
                                          this.user = data;
                                        });
     });
     this._route.data.forEach((data: { products: Product[] }) => this.products = data.products);

  }
  ngOnDestroy(): void {
    if (this.userServiceSubscribe) {
      this.userServiceSubscribe.unsubscribe();
    }
  }
  goBack(): void {
    window.history.back();
  }
}
