import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitySectionComponent } from './productivity-section.component';

describe('ProductivitySectionComponent', () => {
  let component: ProductivitySectionComponent;
  let fixture: ComponentFixture<ProductivitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductivitySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
