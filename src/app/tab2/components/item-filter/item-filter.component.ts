import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
})
export class ItemFilterComponent implements OnInit {
  @Input() optionFilter: any={};
  @Input () filterActived: number;
  @Output() categoryChoosed: EventEmitter<number> = new EventEmitter(); 
  
  constructor() { }
  ngOnInit() {}

  public filterEvent(idCategory){
    this.categoryChoosed.emit(idCategory);
  }
}
