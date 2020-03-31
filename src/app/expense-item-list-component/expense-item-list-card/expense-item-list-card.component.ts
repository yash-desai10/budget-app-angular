import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-expense-item-list-card',
  templateUrl: './expense-item-list-card.component.html',
  styleUrls: ['./expense-item-list-card.component.scss']
})
export class ExpenseItemListCardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() xButtonClick:EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

onXButtonClick()
{
  this.xButtonClick.emit();
}

onCardClick(){
this.cardClick.emit();
}

}
