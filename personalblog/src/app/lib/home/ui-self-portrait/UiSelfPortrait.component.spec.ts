import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UISelfPortraitComponent } from './UiSelfPortrait.component';

describe('SelfPortraitComponent', () => {
  let component: UISelfPortraitComponent;
  let fixture: ComponentFixture<UISelfPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UISelfPortraitComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UISelfPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
