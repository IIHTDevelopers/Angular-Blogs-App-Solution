import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Fetch all blogs
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/blogs`);
  }

  // Fetch a single blog by ID
  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/blogs/${id}`);
  }

  // Add a new blog
  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/blogs`, blog);
  }

  // Update an existing blog
  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/blogs/${blog.id}`, blog);
  }

  // Delete a blog by ID
  deleteBlog(id: number): Observable<Blog> {
    return this.http.delete<Blog>(`${this.apiUrl}/blogs/${id}`);
  }
}
