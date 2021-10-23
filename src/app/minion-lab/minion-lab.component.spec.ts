import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionLabComponent } from './minion-lab.component';

describe('MinionLabComponent', () => {
  let component: MinionLabComponent;
  let fixture: ComponentFixture<MinionLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinionLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinionLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
