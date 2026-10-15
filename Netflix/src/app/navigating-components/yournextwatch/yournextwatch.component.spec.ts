import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YournextwatchComponent } from './yournextwatch.component';

describe('YournextwatchComponent', () => {
  let component: YournextwatchComponent;
  let fixture: ComponentFixture<YournextwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YournextwatchComponent]
    });
    fixture = TestBed.createComponent(YournextwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
