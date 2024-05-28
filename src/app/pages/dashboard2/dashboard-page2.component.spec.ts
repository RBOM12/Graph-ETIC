import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage2Component } from './dashboard-page2.component';

describe('ArticleComponent', () => {
  let component: DashboardPage2Component;
  let fixture: ComponentFixture<DashboardPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
