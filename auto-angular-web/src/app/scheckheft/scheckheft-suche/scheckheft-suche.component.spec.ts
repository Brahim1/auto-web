import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheckheftSucheComponent } from './scheckheft-suche.component';

describe('ScheckheftSucheComponent', () => {
  let component: ScheckheftSucheComponent;
  let fixture: ComponentFixture<ScheckheftSucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheckheftSucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheckheftSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
