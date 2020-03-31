import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { UpdateEvent } from '../expense-item-list-component/expense-item-list-component.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  budgetItems: BudgetItem[]=new Array<BudgetItem>();
  totalBudget:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem)
  {
    this.budgetItems.push(newItem);
    this.totalBudget+=newItem.amount;
  }

  deleteItem(item:BudgetItem)
  {
    let index=  this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget-=item.amount;
  }

  updateItem(updateEvent:UpdateEvent)
  {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =updateEvent.new;

    this.totalBudget-=updateEvent.old.amount;
    this.totalBudget+=updateEvent.new.amount;
  }
}
