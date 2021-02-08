/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoneticilerComponent } from './yoneticiler.component';

describe('YoneticilerComponent', () => {
  let component: YoneticilerComponent;
  let fixture: ComponentFixture<YoneticilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneticilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneticilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
