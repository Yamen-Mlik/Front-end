import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDeviseComponent } from './ajout-devise.component';

describe('AjoutDeviseComponent', () => {
  let component: AjoutDeviseComponent;
  let fixture: ComponentFixture<AjoutDeviseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutDeviseComponent]
    });
    fixture = TestBed.createComponent(AjoutDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});