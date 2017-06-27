import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {

  @Output() sortPropertyChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sortOrderChange(event: any): void{
    console.log(event);
    this.sortPropertyChanged.emit(event.target.value);
  }
}
