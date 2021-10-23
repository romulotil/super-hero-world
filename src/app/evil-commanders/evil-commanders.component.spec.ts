import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilCommandersComponent } from './evil-commanders.component';

describe('EvilCommandersComponent', () => {
  let component: EvilCommandersComponent;
  let fixture: ComponentFixture<EvilCommandersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvilCommandersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilCommandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
