import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCreditComponent } from './mortgage-credit.component';

describe('MortgageCreditComponent', () => {
  let component: MortgageCreditComponent;
  let fixture: ComponentFixture<MortgageCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
