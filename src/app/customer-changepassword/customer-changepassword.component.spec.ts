import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChangepasswordComponent } from './customer-changepassword.component';

describe('CustomerChangepasswordComponent', () => {
  let component: CustomerChangepasswordComponent;
  let fixture: ComponentFixture<CustomerChangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerChangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
