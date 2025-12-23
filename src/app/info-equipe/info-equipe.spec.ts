import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEquipe } from './info-equipe';

describe('InfoEquipe', () => {
  let component: InfoEquipe;
  let fixture: ComponentFixture<InfoEquipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEquipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEquipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
