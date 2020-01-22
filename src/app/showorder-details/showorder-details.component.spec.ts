import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoworderDetailsComponent } from './showorder-details.component';

describe('ShoworderDetailsComponent', () => {
  let component: ShoworderDetailsComponent;
  let fixture: ComponentFixture<ShoworderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoworderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoworderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
