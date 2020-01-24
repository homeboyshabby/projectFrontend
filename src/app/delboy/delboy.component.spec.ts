import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelboyComponent } from './delboy.component';

describe('DelboyComponent', () => {
  let component: DelboyComponent;
  let fixture: ComponentFixture<DelboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
