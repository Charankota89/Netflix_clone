import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionThrillersComponent } from './action-thrillers.component';

describe('ActionThrillersComponent', () => {
  let component: ActionThrillersComponent;
  let fixture: ComponentFixture<ActionThrillersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionThrillersComponent]
    });
    fixture = TestBed.createComponent(ActionThrillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
