import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedMenuComponent } from './logged-menu.component';

describe('LoggedMenuComponent', () => {
  let component: LoggedMenuComponent;
  let fixture: ComponentFixture<LoggedMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
