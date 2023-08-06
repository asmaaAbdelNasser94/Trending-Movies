import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsComponent } from './movies-details.component';

describe('MoviesDetailsComponent', () => {
  let component: MoviesDetailsComponent;
  let fixture: ComponentFixture<MoviesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
