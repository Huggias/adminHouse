import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GcomidasPage } from './gcomidas.page';

describe('GcomidasPage', () => {
  let component: GcomidasPage;
  let fixture: ComponentFixture<GcomidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcomidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GcomidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
