/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AidatlarComponent } from './aidatlar.component';

describe('AidatlarComponent', () => {
  let component: AidatlarComponent;
  let fixture: ComponentFixture<AidatlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidatlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidatlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
