import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmenuPage } from './dmenu.page';

describe('DmenuPage', () => {
  let component: DmenuPage;
  let fixture: ComponentFixture<DmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
