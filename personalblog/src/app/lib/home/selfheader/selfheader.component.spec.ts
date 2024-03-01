import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelfheaderComponent } from './selfheader.component';

describe('SelfheaderComponent', () => {
  let component: SelfheaderComponent;
  let fixture: ComponentFixture<SelfheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfheaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
