import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtnFleeceCalcComponent } from './ctn-fleece-calc.component';

describe('CtnFleeceCalcComponent', () => {
  let component: CtnFleeceCalcComponent;
  let fixture: ComponentFixture<CtnFleeceCalcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CtnFleeceCalcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtnFleeceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
