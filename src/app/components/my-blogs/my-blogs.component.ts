import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {
  blogs: Blog[] = [];
  editingBlog: Blog | null = null;
  addingNewBlog: boolean = false;
  newBlog: Blog = {
    id: 0,
    title: '',
    content: '',
    author: "",
    date: new Date()
  };

  constructor() {
    this.loadBlogs();
  }

  ngOnInit() {
  }

  loadBlogs() {
    this.blogs = [
      { id: 1, title: 'First Blog', content: 'Content of the first blog...', author: 'Author 1', date: new Date() },
      { id: 2, title: 'Second Blog', content: 'Content of the second blog...', author: 'Author 2', date: new Date() }
    ];
  }

  addBlog() {
    if (this.newBlog.title && this.newBlog.content) {
      this.newBlog.id = this.generateUniqueId();
      this.blogs.push({ ...this.newBlog });
      this.resetNewBlog();
    }
  }

  updateBlog() {
    if (this.editingBlog) {
      const index = this.blogs.findIndex(blog => blog.id === this.editingBlog?.id);
      if (index !== -1) {
        this.editingBlog.date = new Date(this.editingBlog.date);
        this.blogs[index] = { ...this.editingBlog };
        this.editingBlog = null;
      }
    }
  }

  deleteBlog(id: number) {
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
    }
  }

  editBlog(blog: Blog) {
    this.editingBlog = { ...blog };
  }

  cancelEdit() {
    this.editingBlog = null;
  }

  resetNewBlog() {
    this.newBlog = {
      id: 0,
      title: '',
      content: '',
      date: new Date(),
      author: ''
    };
  }

  toggleAddForm() {
    this.addingNewBlog = !this.addingNewBlog;
    if (!this.addingNewBlog) {
      this.resetNewBlog();
    }
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
