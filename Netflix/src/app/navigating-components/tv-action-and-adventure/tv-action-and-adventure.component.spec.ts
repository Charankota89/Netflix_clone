import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvActionAndAdventureComponent } from './tv-action-and-adventure.component';

describe('TvActionAndAdventureComponent', () => {
  let component: TvActionAndAdventureComponent;
  let fixture: ComponentFixture<TvActionAndAdventureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvActionAndAdventureComponent]
    });
    fixture = TestBed.createComponent(TvActionAndAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
