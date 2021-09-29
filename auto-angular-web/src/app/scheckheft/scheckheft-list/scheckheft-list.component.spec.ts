import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheckheftListComponent } from './scheckheft-list.component';

describe('ScheckheftListComponent', () => {
  let component: ScheckheftListComponent;
  let fixture: ComponentFixture<ScheckheftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheckheftListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheckheftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
