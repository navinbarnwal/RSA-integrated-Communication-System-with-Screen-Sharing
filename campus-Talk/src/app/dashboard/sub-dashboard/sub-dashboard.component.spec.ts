import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDashboardComponent } from './sub-dashboard.component';

describe('SubDashboardComponent', () => {
  let component: SubDashboardComponent;
  let fixture: ComponentFixture<SubDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
