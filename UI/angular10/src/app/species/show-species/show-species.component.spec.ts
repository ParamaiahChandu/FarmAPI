import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpeciesComponent } from './show-species.component';

describe('ShowSpeciesComponent', () => {
  let component: ShowSpeciesComponent;
  let fixture: ComponentFixture<ShowSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
