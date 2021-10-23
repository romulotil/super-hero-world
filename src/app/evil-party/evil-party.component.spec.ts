import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilPartyComponent } from './evil-party.component';

describe('EvilPartyComponent', () => {
  let component: EvilPartyComponent;
  let fixture: ComponentFixture<EvilPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvilPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
