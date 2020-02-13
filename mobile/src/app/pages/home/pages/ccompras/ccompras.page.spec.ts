import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CcomprasPage } from './ccompras.page';

describe('CcomprasPage', () => {
  let component: CcomprasPage;
  let fixture: ComponentFixture<CcomprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcomprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CcomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
