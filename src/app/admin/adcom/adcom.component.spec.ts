/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdcomComponent } from './adcom.component';

describe('AdcomComponent', () => {
  let component: AdcomComponent;
  let fixture: ComponentFixture<AdcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
