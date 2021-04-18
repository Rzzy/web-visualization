import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHtmlCssComponent } from './svg-html-css.component';

describe('SvgHtmlCssComponent', () => {
  let component: SvgHtmlCssComponent;
  let fixture: ComponentFixture<SvgHtmlCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgHtmlCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHtmlCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
