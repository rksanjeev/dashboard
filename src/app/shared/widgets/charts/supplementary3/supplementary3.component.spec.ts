import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplementary3Component } from './supplementary3.component';

describe('Supplementary3Component', () => {
  let component: Supplementary3Component;
  let fixture: ComponentFixture<Supplementary3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supplementary3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supplementary3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
