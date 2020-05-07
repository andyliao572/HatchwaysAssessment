import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispStudentsComponent } from './disp-students.component';

describe('DispStudentsComponent', () => {
  let component: DispStudentsComponent;
  let fixture: ComponentFixture<DispStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
