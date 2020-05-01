import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    component = new AppComponent();
    component.ngOnInit();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
