import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlateComponent } from './new-plate.component';

describe('NewPlateComponent', () => {
  let component: NewPlateComponent;
  let fixture: ComponentFixture<NewPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
