import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplementary4Component } from './supplementary4.component';

describe('Supplementary4Component', () => {
  let component: Supplementary4Component;
  let fixture: ComponentFixture<Supplementary4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supplementary4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supplementary4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
