import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSaplingsComponent } from './add-edit-saplings.component';

describe('AddEditSaplingsComponent', () => {
  let component: AddEditSaplingsComponent;
  let fixture: ComponentFixture<AddEditSaplingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSaplingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSaplingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
