import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSaplingsComponent } from './show-saplings.component';

describe('ShowSaplingsComponent', () => {
  let component: ShowSaplingsComponent;
  let fixture: ComponentFixture<ShowSaplingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSaplingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSaplingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
