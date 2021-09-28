import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheckheftBuchComponent } from './scheckheft-buch.component';

describe('ScheckheftBuchComponent', () => {
  let component: ScheckheftBuchComponent;
  let fixture: ComponentFixture<ScheckheftBuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheckheftBuchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheckheftBuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
