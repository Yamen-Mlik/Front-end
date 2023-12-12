import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangedeviceComponent } from './echangedevice.component';

describe('EchangedeviceComponent', () => {
  let component: EchangedeviceComponent;
  let fixture: ComponentFixture<EchangedeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EchangedeviceComponent]
    });
    fixture = TestBed.createComponent(EchangedeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
