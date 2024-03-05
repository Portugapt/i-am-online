import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelfHeaderComponent } from './UiSelfHeader.component';

describe('SelfheaderComponent', () => {
  let component: SelfHeaderComponent;
  let fixture: ComponentFixture<SelfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
