import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBlogContentComponent } from './ui-blog-content.component';

describe('UiBlogContentComponent', () => {
  let component: UiBlogContentComponent;
  let fixture: ComponentFixture<UiBlogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBlogContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
