import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedLoginComponent } from './masked-login.component';

describe('MaskedLoginComponent', () => {
  let component: MaskedLoginComponent;
  let fixture: ComponentFixture<MaskedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskedLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
