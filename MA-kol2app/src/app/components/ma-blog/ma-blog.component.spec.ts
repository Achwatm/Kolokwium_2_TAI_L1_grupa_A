import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MABlogComponent } from './ma-blog.component';

describe('MABlogComponent', () => {
  let component: MABlogComponent;
  let fixture: ComponentFixture<MABlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MABlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MABlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
