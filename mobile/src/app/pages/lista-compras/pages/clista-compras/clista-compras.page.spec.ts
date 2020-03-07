import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClistaComprasPage } from './clista-compras.page';

describe('ClistaComprasPage', () => {
  let component: ClistaComprasPage;
  let fixture: ComponentFixture<ClistaComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClistaComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClistaComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
