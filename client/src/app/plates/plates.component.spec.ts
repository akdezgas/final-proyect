import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesComponent } from './plates.component';

describe('PlatesComponent', () => {
  let component: PlatesComponent;
  let fixture: ComponentFixture<PlatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
