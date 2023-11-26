import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogsComponent {
  blogs: any[] = [
    { id: 1, title: 'Sample Title', content: 'Sample Content', date: '2023-11-26', author: 'John Doe' }
  ];
  showForm: boolean = false;
  blogTitle: string = '';
  blogContent: string = '';
  blogAuthor: string = '';
  blogDate: string = '';
  editing: boolean = false;
  editingBlog: any = null;

  toggleForm() {
    this.showForm = !this.showForm;
    this.editing = false;
    this.blogTitle = '';
    this.blogContent = '';
    this.blogAuthor = '';
    this.editingBlog = null;
  }

  editBlog(blog: any) {
    this.showForm = true;
    this.editing = true;
    this.blogTitle = blog.title;
    this.blogContent = blog.content;
    this.blogAuthor = blog.author;
    this.editingBlog = blog;
  }

  deleteBlog(blog: any) {
    this.blogs = this.blogs.filter(b => b.id !== blog.id);
  }

  saveBlog() {
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    if (this.editing) {
      // Update existing blog
      this.editingBlog.title = this.blogTitle;
      this.editingBlog.content = this.blogContent;
      this.editingBlog.author = this.blogAuthor;
      this.editingBlog.date = currentDate;
    } else {
      // Add new blog
      const newBlog = {
        id: this.blogs.length + 1,
        title: this.blogTitle,
        content: this.blogContent,
        author: this.blogAuthor,
        date: currentDate
      };
      this.blogs.push(newBlog);
    }
    this.toggleForm();
  }
}
