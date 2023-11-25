import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MyBlogsComponent } from './my-blogs.component';
import { FormsModule } from '@angular/forms';

describe('MyBlogsComponent', () => {
  let fixture: ComponentFixture<MyBlogsComponent>;
  let component: MyBlogsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyBlogsComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the MyBlogsComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should load blogs', () => {
      expect(component.blogs.length).toBeGreaterThan(0);
    });

    it('should add a blog', () => {
      component.newBlog.title = 'New Blog Title';
      component.newBlog.content = 'Content of the new blog...';
      component.addBlog();
      expect(component.blogs.length).toBeGreaterThan(2);
    });

    it('should not add a blog without title or content', () => {
      component.newBlog.title = '';
      component.newBlog.content = '';
      component.addBlog();
      expect(component.blogs.length).toBe(2);
    });

    it('should delete a blog', () => {
      const initialLength = component.blogs.length;
      component.deleteBlog(1);
      expect(component.blogs.length).toBeLessThan(initialLength);
    });

    it('should edit a blog', () => {
      const blogToEdit = component.blogs[0];
      component.editBlog(blogToEdit);
      expect(component.editingBlog).toEqual(blogToEdit);
    });

    it('should cancel editing a blog', () => {
      component.cancelEdit();
      expect(component.editingBlog).toBeNull();
    });

    it('should toggle "Add Blog" form visibility', () => {
      component.toggleAddForm();
      expect(component.addingNewBlog).toBe(true);

      component.toggleAddForm();
      expect(component.addingNewBlog).toBe(false);
    });

    it('should reset the "Add Blog" form', () => {
      component.newBlog.title = 'New Blog Title';
      component.newBlog.content = 'Content of the new blog...';
      component.toggleAddForm();
      expect(component.addingNewBlog).toBe(true);

      component.resetNewBlog();
      expect(component.newBlog.title).toBe('');
      expect(component.newBlog.content).toBe('');
    });
  });
});
