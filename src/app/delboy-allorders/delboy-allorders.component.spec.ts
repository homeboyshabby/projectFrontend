import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelboyAllordersComponent } from './delboy-allorders.component';

describe('DelboyAllordersComponent', () => {
  let component: DelboyAllordersComponent;
  let fixture: ComponentFixture<DelboyAllordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelboyAllordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelboyAllordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
