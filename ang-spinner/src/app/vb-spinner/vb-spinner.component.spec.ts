import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbSpinnerComponent } from './vb-spinner.component';

describe('VbSpinnerComponent', () => {
  let component: VbSpinnerComponent;
  let fixture: ComponentFixture<VbSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
