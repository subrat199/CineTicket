import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponentComponent } from './movies-component.component';

describe('MoviesComponentComponent', () => {
  let component: MoviesComponentComponent;
  let fixture: ComponentFixture<MoviesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponentComponent]
    });
    fixture = TestBed.createComponent(MoviesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
