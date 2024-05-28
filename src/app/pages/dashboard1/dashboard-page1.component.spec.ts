import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage1Component } from './dashboard-page1.component';

describe('ArticleComponent', () => {
  let component: DashboardPage1Component;
  let fixture: ComponentFixture<DashboardPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
