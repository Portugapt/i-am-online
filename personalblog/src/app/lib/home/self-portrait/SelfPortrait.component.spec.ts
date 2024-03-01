import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelfPortraitComponent } from './SelfPortrait.component';

describe('SelfPortraitComponent', () => {
  let component: SelfPortraitComponent;
  let fixture: ComponentFixture<SelfPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfPortraitComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
