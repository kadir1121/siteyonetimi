/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DairelerComponent } from './daireler.component';

describe('DairelerComponent', () => {
  let component: DairelerComponent;
  let fixture: ComponentFixture<DairelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
