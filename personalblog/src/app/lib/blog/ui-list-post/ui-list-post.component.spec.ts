import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiListPostComponent } from './ui-list-post.component';

describe('UiListPostsComponent', () => {
  let component: UiListPostComponent;
  let fixture: ComponentFixture<UiListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiListPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
