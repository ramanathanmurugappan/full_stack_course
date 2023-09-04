import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorComponent } from './constructor.component';

describe('ConstructorComponent', () => {
  let component: ConstructorComponent;
  let fixture: ComponentFixture<ConstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructorComponent]
    });
    fixture = TestBed.createComponent(ConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
