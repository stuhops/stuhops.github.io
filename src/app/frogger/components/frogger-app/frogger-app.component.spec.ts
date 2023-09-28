import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroggerAppComponent } from './frogger-app.component';

describe('FroggerAppComponent', () => {
  let component: FroggerAppComponent;
  let fixture: ComponentFixture<FroggerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FroggerAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FroggerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
