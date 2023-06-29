import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserInputComponent } from './user-input.component';

describe('UserInputComponent', () => {
  let component: AddUserInputComponent;
  let fixture: ComponentFixture<AddUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
