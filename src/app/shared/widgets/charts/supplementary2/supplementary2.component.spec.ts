import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplementary2Component } from './supplementary2.component';

describe('Supplementary2Component', () => {
  let component: Supplementary2Component;
  let fixture: ComponentFixture<Supplementary2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supplementary2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supplementary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
