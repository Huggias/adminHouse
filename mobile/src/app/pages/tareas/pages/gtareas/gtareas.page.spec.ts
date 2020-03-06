import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GtareasPage } from './gtareas.page';

describe('GtareasPage', () => {
  let component: GtareasPage;
  let fixture: ComponentFixture<GtareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GtareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
