import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from './blog.component';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should add a new blog', () => {
      component.blogTitle = 'Test Title';
      component.blogContent = 'Test Content';
      component.blogAuthor = 'Test Author';
      component.blogDate = '2023-11-27';
      component.saveBlog();
      expect(component.blogs.length).toBe(2);
    });

    it('should display the List of Blogs heading', () => {
      const headingElement = fixture.nativeElement.querySelector('h1');
      expect(headingElement.textContent).toContain('List of Blogs');
    });

    it('should have "Title:" in the rendered HTML', () => {
      const titleElement = fixture.nativeElement.querySelector('li').textContent;
      expect(titleElement).toContain('Title:');
    });

    it('should have "Content:" in the rendered HTML', () => {
      const contentElement = fixture.nativeElement.querySelector('li').textContent;
      expect(contentElement).toContain('Content:');
    });

    it('should have "Author:" in the rendered HTML', () => {
      const authorElement = fixture.nativeElement.querySelector('li').textContent;
      expect(authorElement).toContain('Author:');
    });

    it('should have "Date:" in the rendered HTML', () => {
      const dateElement = fixture.nativeElement.querySelector('li').textContent;
      expect(dateElement).toContain('Date:');
    });

    it('should have an edit button in the rendered HTML', () => {
      const editButton = fixture.nativeElement.querySelector('button:nth-of-type(1)');
      expect(editButton.textContent).toContain('Edit');
    });

    it('should have a delete button in the rendered HTML', () => {
      const deleteButton = fixture.nativeElement.querySelector('button:nth-of-type(2)');
      expect(deleteButton.textContent).toContain('Delete');
    });

    it('should have the "Edit" button visible when showForm is true', () => {
      component.showForm = true;
      fixture.detectChanges();
      const addButton = fixture.nativeElement.querySelector('button');
      expect(addButton.textContent).toContain('Edit');
    });

    it('should have the "Title" field visible when showForm is true', () => {
      component.showForm = true;
      fixture.detectChanges();
      const titleField = fixture.nativeElement.querySelector('input[name="title"]');
      expect(titleField).toBeTruthy();
    });

    it('should have the "Content" field visible when showForm is true', () => {
      component.showForm = true;
      fixture.detectChanges();
      const contentField = fixture.nativeElement.querySelector('textarea[name="content"]');
      expect(contentField).toBeTruthy();
    });

    it('should have the "Author" field visible when showForm is true', () => {
      component.showForm = true;
      fixture.detectChanges();
      const authorField = fixture.nativeElement.querySelector('input[name="author"]');
      expect(authorField).toBeTruthy();
    });

    it('should have the "Date" field visible when showForm is true', () => {
      component.showForm = true;
      fixture.detectChanges();
      const dateField = fixture.nativeElement.querySelector('input[name="date"]');
      expect(dateField).toBeTruthy();
    });

    it('should have the "Save Blog" button visible when showForm is true', () => {
      component.showForm = true;
      fixture.detectChanges();
      const saveButton = fixture.nativeElement.querySelector('button[type="submit"]');
      expect(saveButton.textContent).toContain('Save Blog');
    });
  });
});
