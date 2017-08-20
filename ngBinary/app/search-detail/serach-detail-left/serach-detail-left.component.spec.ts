import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachDetailLeftComponent } from './serach-detail-left.component';

describe('SerachDetailLeftComponent', () => {
  let component: SerachDetailLeftComponent;
  let fixture: ComponentFixture<SerachDetailLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachDetailLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachDetailLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
