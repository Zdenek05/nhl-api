import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HockeyDetailPage } from './hockey-detail.page';

describe('HockeyDetailPage', () => {
  let component: HockeyDetailPage;
  let fixture: ComponentFixture<HockeyDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
