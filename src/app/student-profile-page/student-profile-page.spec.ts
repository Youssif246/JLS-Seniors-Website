import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfilePage } from './student-profile-page';

describe('StudentProfilePage', () => {
  let component: StudentProfilePage;
  let fixture: ComponentFixture<StudentProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfilePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfilePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
