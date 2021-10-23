import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilShopComponent } from './evil-shop.component';

describe('EvilShopComponent', () => {
  let component: EvilShopComponent;
  let fixture: ComponentFixture<EvilShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvilShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
