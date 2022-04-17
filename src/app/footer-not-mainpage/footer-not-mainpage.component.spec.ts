import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNotMainpageComponent } from './footer-not-mainpage.component';

describe('FooterNotMainpageComponent', () => {
  let component: FooterNotMainpageComponent;
  let fixture: ComponentFixture<FooterNotMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNotMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNotMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
