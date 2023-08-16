import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudipPlayerComponent } from './audip-player.component';

describe('AudipPlayerComponent', () => {
  let component: AudipPlayerComponent;
  let fixture: ComponentFixture<AudipPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudipPlayerComponent]
    });
    fixture = TestBed.createComponent(AudipPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
