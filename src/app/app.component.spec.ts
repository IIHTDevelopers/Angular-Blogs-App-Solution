import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlogsComponent } from './component/blog/blog.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BlogsComponent
            ],
        }).compileComponents();
    });

    describe('boundary', () => {
        it('should create the app', () => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.componentInstance;
            expect(app).toBeTruthy();
        });

        it('should render title and app-blogs component', () => {
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const compiled = fixture.nativeElement;
            expect(compiled.querySelector('h2').textContent).toContain('My Blog App');
            expect(compiled.querySelector('app-blogs')).toBeTruthy();
        });
    });
});
