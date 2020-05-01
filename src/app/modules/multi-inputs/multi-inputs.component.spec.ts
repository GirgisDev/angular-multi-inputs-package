import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputsComponent } from './multi-inputs.component';
import { By } from '@angular/platform-browser';
import { DebugElement, OnInit } from '@angular/core';

describe('MultiInputsComponent', () => {
  let component: MultiInputsComponent;
  let fixture: ComponentFixture<MultiInputsComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiInputsComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiInputsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add two inputs', () => {
    component.addInput();
    component.addInput();
    expect(component.valuesArray.length).toEqual(3);
  });
});
