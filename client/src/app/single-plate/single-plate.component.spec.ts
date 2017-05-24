import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlateComponent } from './single-plate.component';

describe('SinglePlateComponent', () => {
  let component: SinglePlateComponent;
  let fixture: ComponentFixture<SinglePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
