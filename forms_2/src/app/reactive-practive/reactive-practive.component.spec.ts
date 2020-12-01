import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePractiveComponent } from './reactive-practive.component';

describe('ReactivePractiveComponent', () => {
  let component: ReactivePractiveComponent;
  let fixture: ComponentFixture<ReactivePractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
