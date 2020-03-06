import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtareaPage } from './ctarea.page';

describe('CtareaPage', () => {
  let component: CtareaPage;
  let fixture: ComponentFixture<CtareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
