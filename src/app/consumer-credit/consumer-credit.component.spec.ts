import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCreditComponent } from './consumer-credit.component';

describe('ConsumerCreditComponent', () => {
  let component: ConsumerCreditComponent;
  let fixture: ComponentFixture<ConsumerCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
