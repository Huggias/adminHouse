import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComprasComponent } from './info-compras.component';

describe('InfoComprasComponent', () => {
  let component: InfoComprasComponent;
  let fixture: ComponentFixture<InfoComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
