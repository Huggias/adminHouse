import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NochePage } from './noche.page';

describe('NochePage', () => {
  let component: NochePage;
  let fixture: ComponentFixture<NochePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NochePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NochePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
