import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseItemListComponentComponent } from './expense-item-list-component.component';

describe('ExpenseItemListComponentComponent', () => {
  let component: ExpenseItemListComponentComponent;
  let fixture: ComponentFixture<ExpenseItemListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseItemListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseItemListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
