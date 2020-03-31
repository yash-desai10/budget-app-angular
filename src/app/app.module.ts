import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddExpenseItemComponentComponent } from './add-expense-item-component/add-expense-item-component.component';
import { ExpenseItemListComponentComponent } from './expense-item-list-component/expense-item-list-component.component';
import { ExpenseItemListCardComponent } from './expense-item-list-component/expense-item-list-card/expense-item-list-card.component';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddExpenseItemComponentComponent,
    ExpenseItemListComponentComponent,
    ExpenseItemListCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
