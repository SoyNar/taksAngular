import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaroComponent } from './saro.component';

describe('SaroComponent', () => {
  let component: SaroComponent;
  let fixture: ComponentFixture<SaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
