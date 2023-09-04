import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslocoComponent } from './transloco.component';

describe('TranslocoComponent', () => {
  let component: TranslocoComponent;
  let fixture: ComponentFixture<TranslocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslocoComponent]
    });
    fixture = TestBed.createComponent(TranslocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
