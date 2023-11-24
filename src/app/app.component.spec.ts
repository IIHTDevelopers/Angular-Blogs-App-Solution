import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AddUpdateBlogComponent } from './components/add-update-blog/add-update-blog.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, BlogListComponent, AddUpdateBlogComponent],
            imports: [RouterTestingModule]
        });
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(app).toBeTruthy();
        });

        it('should display the title', () => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Welcome to My Blog App');
        });
    });
});
