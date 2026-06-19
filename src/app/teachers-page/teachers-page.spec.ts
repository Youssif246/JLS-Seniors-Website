import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPage } from './teachers-page';

describe('TeachersPage', () => {
  let component: TeachersPage;
  let fixture: ComponentFixture<TeachersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
