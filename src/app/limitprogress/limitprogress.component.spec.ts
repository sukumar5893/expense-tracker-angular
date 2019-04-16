import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitprogressComponent } from './limitprogress.component';

describe('LimitprogressComponent', () => {
  let component: LimitprogressComponent;
  let fixture: ComponentFixture<LimitprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
