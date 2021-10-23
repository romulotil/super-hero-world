import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterLabComponent } from './monster-lab.component';

describe('MonsterLabComponent', () => {
  let component: MonsterLabComponent;
  let fixture: ComponentFixture<MonsterLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
