import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageDetailsComponent } from './blog-page-details.component';

describe('BlogPageDetailsComponent', () => {
  let component: BlogPageDetailsComponent;
  let fixture: ComponentFixture<BlogPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
