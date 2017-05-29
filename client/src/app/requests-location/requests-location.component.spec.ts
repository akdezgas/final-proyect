import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsLocationComponent } from './requests-location.component';

describe('RequestsLocationComponent', () => {
  let component: RequestsLocationComponent;
  let fixture: ComponentFixture<RequestsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
