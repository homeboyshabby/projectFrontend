import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTablelistComponent } from './manager-tablelist.component';

describe('ManagerTablelistComponent', () => {
  let component: ManagerTablelistComponent;
  let fixture: ComponentFixture<ManagerTablelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTablelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
