import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeinindiaComponent } from './madeinindia.component';

describe('MadeinindiaComponent', () => {
  let component: MadeinindiaComponent;
  let fixture: ComponentFixture<MadeinindiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadeinindiaComponent]
    });
    fixture = TestBed.createComponent(MadeinindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
