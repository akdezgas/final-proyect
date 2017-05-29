import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesLocationComponent } from './plates-location.component';

describe('PlatesLocationComponent', () => {
  let component: PlatesLocationComponent;
  let fixture: ComponentFixture<PlatesLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatesLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
