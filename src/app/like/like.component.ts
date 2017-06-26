import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  
  @Input() liked:boolean;
  @Output() onLikeClicked:EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.liked=!this.liked;
    this.onLikeClicked.emit(this.liked);
  }
}
