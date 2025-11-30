import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poule } from './poule';

describe('Poule', () => {
  let component: Poule;
  let fixture: ComponentFixture<Poule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
