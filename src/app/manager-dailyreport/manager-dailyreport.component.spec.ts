import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDailyreportComponent } from './manager-dailyreport.component';

describe('ManagerDailyreportComponent', () => {
  let component: ManagerDailyreportComponent;
  let fixture: ComponentFixture<ManagerDailyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDailyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDailyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
