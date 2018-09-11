import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureResultsComponent } from './feature-results.component';

describe('FeatureResultsComponent', () => {
  let component: FeatureResultsComponent;
  let fixture: ComponentFixture<FeatureResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
