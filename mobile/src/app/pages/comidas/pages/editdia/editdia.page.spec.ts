import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditdiaPage } from './editdia.page';

describe('EditdiaPage', () => {
  let component: EditdiaPage;
  let fixture: ComponentFixture<EditdiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditdiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
