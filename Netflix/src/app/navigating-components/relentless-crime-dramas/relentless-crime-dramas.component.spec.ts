import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelentlessCrimeDramasComponent } from './relentless-crime-dramas.component';

describe('RelentlessCrimeDramasComponent', () => {
  let component: RelentlessCrimeDramasComponent;
  let fixture: ComponentFixture<RelentlessCrimeDramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelentlessCrimeDramasComponent]
    });
    fixture = TestBed.createComponent(RelentlessCrimeDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
