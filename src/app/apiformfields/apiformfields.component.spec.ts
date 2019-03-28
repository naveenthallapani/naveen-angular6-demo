import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiformfieldsComponent } from './apiformfields.component';

describe('ApiformfieldsComponent', () => {
  let component: ApiformfieldsComponent;
  let fixture: ComponentFixture<ApiformfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiformfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiformfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
