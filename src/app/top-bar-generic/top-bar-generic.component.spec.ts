import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarGenericComponent } from './top-bar-generic.component';

describe('TopBarGenericComponent', () => {
  let component: TopBarGenericComponent;
  let fixture: ComponentFixture<TopBarGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
