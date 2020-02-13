import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DcomprasPage } from './dcompras.page';

describe('DcomprasPage', () => {
  let component: DcomprasPage;
  let fixture: ComponentFixture<DcomprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcomprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DcomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
