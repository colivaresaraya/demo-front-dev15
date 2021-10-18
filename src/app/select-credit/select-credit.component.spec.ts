import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreditComponent } from './select-credit.component';

describe('SelectCreditComponent', () => {
  let component: SelectCreditComponent;
  let fixture: ComponentFixture<SelectCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
