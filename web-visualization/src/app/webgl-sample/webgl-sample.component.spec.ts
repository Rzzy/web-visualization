import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebglSampleComponent } from './webgl-sample.component';

describe('WebglSampleComponent', () => {
  let component: WebglSampleComponent;
  let fixture: ComponentFixture<WebglSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebglSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebglSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
