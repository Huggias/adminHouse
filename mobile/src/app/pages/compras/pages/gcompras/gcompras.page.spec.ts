import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GcomprasPage } from './gcompras.page';

describe('GcomprasPage', () => {
  let component: GcomprasPage;
  let fixture: ComponentFixture<GcomprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcomprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GcomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
