import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.blogService.getAllBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }

  editBlog(blogId: number): void {
    this.router.navigate(['/edit', blogId]);
  }

  deleteBlog(blogId: number): void {
    this.blogService.deleteBlog(blogId).subscribe(() => {
      this.loadBlogs();
    });
  }
}
