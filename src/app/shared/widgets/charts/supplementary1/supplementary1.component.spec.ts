import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplementary1Component } from './supplementary1.component';

describe('Supplementary1Component', () => {
  let component: Supplementary1Component;
  let fixture: ComponentFixture<Supplementary1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supplementary1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supplementary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
