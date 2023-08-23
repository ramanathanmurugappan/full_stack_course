import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryprojectComponent } from './tryproject.component';

describe('TryprojectComponent', () => {
  let component: TryprojectComponent;
  let fixture: ComponentFixture<TryprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryprojectComponent]
    });
    fixture = TestBed.createComponent(TryprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
