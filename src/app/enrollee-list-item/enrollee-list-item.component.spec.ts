import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeListItemComponent } from './enrollee-list-item.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('EnrolleeListItemComponent', () => {
  let component: EnrolleeListItemComponent;
  let fixture: ComponentFixture<EnrolleeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolleeListItemComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
