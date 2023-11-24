import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-add-update-blog',
  templateUrl: './add-update-blog.component.html',
  styleUrls: ['./add-update-blog.component.css']
})
export class AddUpdateBlogComponent implements OnInit {
  blog: Blog = new Blog();
  isEditMode: boolean = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.params['id'];
    if (blogId) {
      this.isEditMode = true;
      this.blogService.getBlogById(blogId).subscribe((data: Blog) => {
        this.blog = data;
      });
    }
  }

  saveBlog(): void {
    if (this.isEditMode) {
      this.blogService.updateBlog(this.blog).subscribe(() => {
        this.router.navigate(['/blogs']);
      });
    } else {
      this.blogService.addBlog(this.blog).subscribe(() => {
        this.router.navigate(['/blogs']);
      });
    }
  }
}
