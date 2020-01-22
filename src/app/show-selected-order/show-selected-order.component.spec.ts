import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedOrderComponent } from './show-selected-order.component';

describe('ShowSelectedOrderComponent', () => {
  let component: ShowSelectedOrderComponent;
  let fixture: ComponentFixture<ShowSelectedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSelectedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSelectedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
