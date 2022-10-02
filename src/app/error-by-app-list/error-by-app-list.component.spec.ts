import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorByAppListComponent } from './error-by-app-list.component';

describe('ErrorByAppListComponent', () => {
  let component: ErrorByAppListComponent;
  let fixture: ComponentFixture<ErrorByAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorByAppListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorByAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
