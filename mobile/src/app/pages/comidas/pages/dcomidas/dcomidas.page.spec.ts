import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DcomidasPage } from './dcomidas.page';

describe('DcomidasPage', () => {
  let component: DcomidasPage;
  let fixture: ComponentFixture<DcomidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcomidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DcomidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
