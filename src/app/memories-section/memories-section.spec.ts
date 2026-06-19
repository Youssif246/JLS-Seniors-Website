import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesSection } from './memories-section';

describe('MemoriesSection', () => {
  let component: MemoriesSection;
  let fixture: ComponentFixture<MemoriesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoriesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
