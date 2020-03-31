import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseItemListCardComponent } from './expense-item-list-card.component';

describe('ExpenseItemListCardComponent', () => {
  let component: ExpenseItemListCardComponent;
  let fixture: ComponentFixture<ExpenseItemListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseItemListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseItemListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
