import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelboyPendingordersComponent } from './delboy-pendingorders.component';

describe('DelboyPendingordersComponent', () => {
  let component: DelboyPendingordersComponent;
  let fixture: ComponentFixture<DelboyPendingordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelboyPendingordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelboyPendingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
