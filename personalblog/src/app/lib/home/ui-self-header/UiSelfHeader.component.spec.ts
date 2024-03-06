import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSelfHeaderComponent } from './UiSelfHeader.component';

describe('SelfheaderComponent', () => {
  let component: UiSelfHeaderComponent;
  let fixture: ComponentFixture<UiSelfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSelfHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiSelfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
