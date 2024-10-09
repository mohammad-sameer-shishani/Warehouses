import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDocumentsViewComponent } from './supply-documents-view.component';

describe('SupplyDocumentsViewComponent', () => {
  let component: SupplyDocumentsViewComponent;
  let fixture: ComponentFixture<SupplyDocumentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyDocumentsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyDocumentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
