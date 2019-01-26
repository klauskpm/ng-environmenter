import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEnvironmenterComponent } from './ng-environmenter.component';

describe('NgEnvironmenterComponent', () => {
  let component: NgEnvironmenterComponent;
  let fixture: ComponentFixture<NgEnvironmenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEnvironmenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEnvironmenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
