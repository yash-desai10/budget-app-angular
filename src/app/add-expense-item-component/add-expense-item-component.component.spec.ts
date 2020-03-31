import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseItemComponentComponent } from './add-expense-item-component.component';

describe('AddExpenseItemComponentComponent', () => {
  let component: AddExpenseItemComponentComponent;
  let fixture: ComponentFixture<AddExpenseItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
