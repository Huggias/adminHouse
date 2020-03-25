import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CmenuPage } from './cmenu.page';

describe('CmenuPage', () => {
  let component: CmenuPage;
  let fixture: ComponentFixture<CmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
