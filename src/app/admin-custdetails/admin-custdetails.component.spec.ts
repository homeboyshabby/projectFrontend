import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustdetailsComponent } from './admin-custdetails.component';

describe('AdminCustdetailsComponent', () => {
  let component: AdminCustdetailsComponent;
  let fixture: ComponentFixture<AdminCustdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
