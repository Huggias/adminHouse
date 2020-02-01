import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogErrorComponent } from './login-dialog-error.component';

describe('LoginDialogErrorComponent', () => {
  let component: LoginDialogErrorComponent;
  let fixture: ComponentFixture<LoginDialogErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialogErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
