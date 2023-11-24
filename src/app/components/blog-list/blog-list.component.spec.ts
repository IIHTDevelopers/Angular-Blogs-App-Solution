import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogListComponent } from './blog-list.component';
import { BlogService } from '../../services/blog.service';
import { of } from 'rxjs';
import { Blog } from '../../models/blog.model';

describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;
  let blogService: BlogService;

  beforeEach(async () => {
    const blogServiceMock = {
      getAllBlogs: jest.fn(() =>
        of([
          {
            id: 1,
            title: 'Sample Title',
            content: 'Sample Content',
            author: 'John Doe',
            date: new Date('2023-11-22')
          },
        ])
      ),
      deleteBlog: jest.fn(() => of({})),
    };

    await TestBed.configureTestingModule({
      declarations: [BlogListComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: BlogService, useValue: blogServiceMock }],
    }).compileComponents();

    blogService = TestBed.inject(BlogService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should display the heading "All Blogs"', () => {
      const compiled = fixture.nativeElement;
      const heading = compiled.querySelector('h2');
      expect(heading.textContent).toContain('All Blogs');
    });

    it('should contain Edit button', () => {
      const compiled = fixture.nativeElement;
      const editButtons = compiled.querySelectorAll('button');
      let hasEditButton = false;
      editButtons.forEach((btn: { textContent: string; }) => {
        if (btn.textContent.trim() === 'Edit') {
          hasEditButton = true;
        }
      });
      expect(hasEditButton).toBeTruthy();
    });

    it('should contain Delete button', () => {
      const compiled = fixture.nativeElement;
      const deleteButtons = compiled.querySelectorAll('button');
      let hasDeleteButton = false;
      deleteButtons.forEach((button: { textContent: string; }) => {
        if (button.textContent.trim() === 'Delete') {
          hasDeleteButton = true;
        }
      });
      expect(hasDeleteButton).toBeTruthy();
    });

    it('should display blogs with mocked data', () => {
      const compiled = fixture.nativeElement;
      const blogElements = compiled.querySelectorAll('div');
      expect(blogElements.length).toBe(1);
      const blog: Blog = new Blog();
      expect(blogElements[0].textContent).toContain(blog.title);
      expect(blogElements[0].textContent).toContain(blog.content);
      expect(blogElements[0].textContent).toContain(blog.author);
      expect(blogElements[0].textContent).toContain('Date:');
      // expect(blogElements[0].textContent).toContain(blog.date.toDateString());
    });
  });
});
