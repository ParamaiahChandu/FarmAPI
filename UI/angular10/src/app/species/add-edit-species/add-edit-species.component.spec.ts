import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSpeciesComponent } from './add-edit-species.component';

describe('AddEditSpeciesComponent', () => {
  let component: AddEditSpeciesComponent;
  let fixture: ComponentFixture<AddEditSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
