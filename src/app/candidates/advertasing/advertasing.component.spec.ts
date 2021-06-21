import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertasingComponent } from './advertasing.component';

describe('AdvertasingComponent', () => {
  let component: AdvertasingComponent;
  let fixture: ComponentFixture<AdvertasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
