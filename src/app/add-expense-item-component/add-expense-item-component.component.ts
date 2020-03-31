import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.models';


@Component({
  selector: 'app-add-expense-item-component',
  templateUrl: './add-expense-item-component.component.html',
  styleUrls: ['./add-expense-item-component.component.scss']
})
export class AddExpenseItemComponentComponent implements OnInit {
@Input() item: BudgetItem;
@Output() formSubmit: EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();

isNewItem:boolean;

  constructor() { }

  ngOnInit() {

    if(this.item)
    {
      this.isNewItem=false;
    }
    else{
      this.isNewItem=true;
      this.item=new BudgetItem('',null);
    }
  }

  onSubmit(form :NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
