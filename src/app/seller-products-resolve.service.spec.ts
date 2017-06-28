import { TestBed, inject } from '@angular/core/testing';

import { SellerProductsResolveService } from './seller-products-resolve.service';

describe('SellerProductsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerProductsResolveService]
    });
  });

  it('should be created', inject([SellerProductsResolveService], (service: SellerProductsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
