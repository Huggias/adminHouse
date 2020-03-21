import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmovimientosPage } from './dmovimientos.page';

describe('DmovimientosPage', () => {
  let component: DmovimientosPage;
  let fixture: ComponentFixture<DmovimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmovimientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmovimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
