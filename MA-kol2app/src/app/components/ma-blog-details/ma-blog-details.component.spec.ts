import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBlogDetailsComponent } from './ma-blog-details.component';

describe('MaBlogDetailsComponent', () => {
  let component: MaBlogDetailsComponent;
  let fixture: ComponentFixture<MaBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
