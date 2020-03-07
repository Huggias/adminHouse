import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlistaComprasPage } from './glista-compras.page';

describe('GlistaComprasPage', () => {
  let component: GlistaComprasPage;
  let fixture: ComponentFixture<GlistaComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlistaComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlistaComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
