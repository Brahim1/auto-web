import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheckheftComponent } from './scheckheft.component';

describe('ScheckheftComponent', () => {
  let component: ScheckheftComponent;
  let fixture: ComponentFixture<ScheckheftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheckheftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheckheftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
