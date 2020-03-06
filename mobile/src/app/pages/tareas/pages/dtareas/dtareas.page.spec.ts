import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DtareasPage } from './dtareas.page';

describe('DtareasPage', () => {
  let component: DtareasPage;
  let fixture: ComponentFixture<DtareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DtareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
