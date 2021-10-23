import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLabComponent } from './tech-lab.component';

describe('TechLabComponent', () => {
  let component: TechLabComponent;
  let fixture: ComponentFixture<TechLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
