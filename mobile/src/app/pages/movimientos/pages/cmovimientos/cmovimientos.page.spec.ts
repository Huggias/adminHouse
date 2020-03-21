import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CmovimientosPage } from './cmovimientos.page';

describe('CmovimientosPage', () => {
  let component: CmovimientosPage;
  let fixture: ComponentFixture<CmovimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmovimientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CmovimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
