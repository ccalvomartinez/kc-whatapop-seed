import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBySellerComponent } from './products-by-seller.component';

describe('ProductsBySellerComponent', () => {
  let component: ProductsBySellerComponent;
  let fixture: ComponentFixture<ProductsBySellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBySellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
