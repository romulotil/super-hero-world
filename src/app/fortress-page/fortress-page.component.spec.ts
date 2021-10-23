import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressPageComponent } from './fortress-page.component';

describe('FortressPageComponent', () => {
  let component: FortressPageComponent;
  let fixture: ComponentFixture<FortressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortressPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
