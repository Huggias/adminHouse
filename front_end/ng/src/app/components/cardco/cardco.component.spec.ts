import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcoComponent } from './cardco.component';

describe('CardcoComponent', () => {
  let component: CardcoComponent;
  let fixture: ComponentFixture<CardcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
