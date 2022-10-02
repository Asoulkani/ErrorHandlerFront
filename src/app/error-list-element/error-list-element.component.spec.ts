import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorListElementComponent } from './error-list-element.component';

describe('ErrorListElementComponent', () => {
  let component: ErrorListElementComponent;
  let fixture: ComponentFixture<ErrorListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
