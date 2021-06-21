import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTabletComponent } from './candidate-tablet.component';

describe('CandidateMobileComponent', () => {
  let component: CandidateTabletComponent;
  let fixture: ComponentFixture<CandidateTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
