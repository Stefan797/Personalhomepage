import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessmailsiteComponent } from './successmailsite.component';

describe('SuccessmailsiteComponent', () => {
  let component: SuccessmailsiteComponent;
  let fixture: ComponentFixture<SuccessmailsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessmailsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessmailsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
