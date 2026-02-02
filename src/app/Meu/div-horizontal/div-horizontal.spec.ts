import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivHorizontal } from './div-horizontal';

describe('DivHorizontal', () => {
  let component: DivHorizontal;
  let fixture: ComponentFixture<DivHorizontal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivHorizontal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivHorizontal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
