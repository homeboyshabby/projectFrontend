import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelboyDeliveredordersComponent } from './delboy-deliveredorders.component';

describe('DelboyDeliveredordersComponent', () => {
  let component: DelboyDeliveredordersComponent;
  let fixture: ComponentFixture<DelboyDeliveredordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelboyDeliveredordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelboyDeliveredordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
