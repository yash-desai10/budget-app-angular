import { Component, OnInit,Input, Output,EventEmitter, IterableDiffers } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-expense-item-list-component',
  templateUrl: './expense-item-list-component.component.html',
  styleUrls: ['./expense-item-list-component.component.scss']
})

export class ExpenseItemListComponentComponent implements OnInit {
@Input() budgetItems: BudgetItem[];

@Output() delete:EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();
@Output() update:EventEmitter<UpdateEvent>=new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }

}

export interface UpdateEvent{
  old:BudgetItem;
  new:BudgetItem;
}
