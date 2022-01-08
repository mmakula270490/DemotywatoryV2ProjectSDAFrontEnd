import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemotComponent } from './add-demot.component';

describe('AddDemotComponent', () => {
  let component: AddDemotComponent;
  let fixture: ComponentFixture<AddDemotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
