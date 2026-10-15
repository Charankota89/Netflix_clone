import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingComponentsComponent } from './navigating-components.component';

describe('NavigatingComponentsComponent', () => {
  let component: NavigatingComponentsComponent;
  let fixture: ComponentFixture<NavigatingComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatingComponentsComponent]
    });
    fixture = TestBed.createComponent(NavigatingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
