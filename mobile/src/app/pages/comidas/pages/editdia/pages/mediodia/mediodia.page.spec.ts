import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediodiaPage } from './mediodia.page';

describe('MediodiaPage', () => {
  let component: MediodiaPage;
  let fixture: ComponentFixture<MediodiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediodiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediodiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
