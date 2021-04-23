import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorTreeComponent } from './vector-tree.component';

describe('VectorTreeComponent', () => {
  let component: VectorTreeComponent;
  let fixture: ComponentFixture<VectorTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
