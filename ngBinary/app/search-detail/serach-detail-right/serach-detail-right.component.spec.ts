import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachDetailRightComponent } from './serach-detail-right.component';

describe('SerachDetailRightComponent', () => {
  let component: SerachDetailRightComponent;
  let fixture: ComponentFixture<SerachDetailRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachDetailRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachDetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
