import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughSampleComponent } from './rough-sample.component';

describe('RoughSampleComponent', () => {
  let component: RoughSampleComponent;
  let fixture: ComponentFixture<RoughSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoughSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoughSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
