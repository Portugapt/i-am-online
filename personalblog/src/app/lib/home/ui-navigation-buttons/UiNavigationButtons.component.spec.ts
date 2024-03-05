import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiNavigationButtonsComponent } from './UiNavigationButtons.component';

describe('NavigationButtonsComponent', () => {
  let component: UiNavigationButtonsComponent;
  let fixture: ComponentFixture<UiNavigationButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiNavigationButtonsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiNavigationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
