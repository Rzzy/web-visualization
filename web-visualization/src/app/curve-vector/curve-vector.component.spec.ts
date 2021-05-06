import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveVectorComponent } from './curve-vector.component';

describe('CurveVectorComponent', () => {
  let component: CurveVectorComponent;
  let fixture: ComponentFixture<CurveVectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurveVectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
