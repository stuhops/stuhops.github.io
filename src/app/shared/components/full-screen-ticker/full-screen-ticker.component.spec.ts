import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenTickerComponent } from './full-screen-ticker.component';

describe('FullScreenTickerComponent', () => {
  let component: FullScreenTickerComponent;
  let fixture: ComponentFixture<FullScreenTickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenTickerComponent],
    });
    fixture = TestBed.createComponent(FullScreenTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
