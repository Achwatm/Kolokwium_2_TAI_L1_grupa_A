import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBlogItemComponent } from './ma-blog-item.component';

describe('MaBlogItemComponent', () => {
  let component: MaBlogItemComponent;
  let fixture: ComponentFixture<MaBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
