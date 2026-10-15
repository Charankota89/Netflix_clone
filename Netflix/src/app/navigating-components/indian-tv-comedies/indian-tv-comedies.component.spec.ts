import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTvComediesComponent } from './indian-tv-comedies.component';

describe('IndianTvComediesComponent', () => {
  let component: IndianTvComediesComponent;
  let fixture: ComponentFixture<IndianTvComediesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianTvComediesComponent]
    });
    fixture = TestBed.createComponent(IndianTvComediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
