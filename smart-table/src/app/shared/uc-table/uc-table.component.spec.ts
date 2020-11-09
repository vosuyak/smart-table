import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcTableComponent } from './uc-table.component';

describe('UcTableComponent', () => {
  let component: UcTableComponent;
  let fixture: ComponentFixture<UcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
