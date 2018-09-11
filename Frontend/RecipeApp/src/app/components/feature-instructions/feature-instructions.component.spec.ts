import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureInstructionsComponent } from './feature-instructions.component';

describe('FeatureInstructionsComponent', () => {
  let component: FeatureInstructionsComponent;
  let fixture: ComponentFixture<FeatureInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
