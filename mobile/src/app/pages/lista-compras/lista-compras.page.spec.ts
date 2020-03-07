import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaComprasPage } from './lista-compras.page';

describe('ListaComprasPage', () => {
  let component: ListaComprasPage;
  let fixture: ComponentFixture<ListaComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
