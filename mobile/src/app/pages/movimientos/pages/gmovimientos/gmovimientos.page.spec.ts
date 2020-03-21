import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GmovimientosPage } from './gmovimientos.page';

describe('GmovimientosPage', () => {
  let component: GmovimientosPage;
  let fixture: ComponentFixture<GmovimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmovimientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GmovimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
