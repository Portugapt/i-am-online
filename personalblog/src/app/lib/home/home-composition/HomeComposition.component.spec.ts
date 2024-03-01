import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCompositionComponent } from './HomeComposition.component';

describe('HomeCompositionComponent', () => {
  let component: HomeCompositionComponent;
  let fixture: ComponentFixture<HomeCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompositionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
