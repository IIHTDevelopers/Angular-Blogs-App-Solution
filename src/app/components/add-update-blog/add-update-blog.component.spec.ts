import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddUpdateBlogComponent } from './add-update-blog.component';

describe('AddUpdateBlogComponent', () => {
  let component: AddUpdateBlogComponent;
  let fixture: ComponentFixture<AddUpdateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdateBlogComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: convertToParamMap({ id: '123' })
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should have a text field with the ID "title"', () => {
      const compiled = fixture.nativeElement;
      const titleInput = compiled.querySelector('input#title');
      expect(titleInput).toBeTruthy();
    });

    it('should have a textarea field with the ID "content"', () => {
      const compiled = fixture.nativeElement;
      const contentTextarea = compiled.querySelector('textarea#content');
      expect(contentTextarea).toBeTruthy();
    });

    it('should have a text field with the ID "author"', () => {
      const compiled = fixture.nativeElement;
      const authorInput = compiled.querySelector('input#author');
      expect(authorInput).toBeTruthy();
    });

    it('should have an input field with the ID "date"', () => {
      const compiled = fixture.nativeElement;
      const dateInput = compiled.querySelector('input#date');
      expect(dateInput).toBeTruthy();
    });

    it('should have a button for form submission', () => {
      const compiled = fixture.nativeElement;
      const submitButton = compiled.querySelector('button[type="submit"]');
      expect(submitButton).toBeTruthy();
    });

    it('should display "Title is required" error message when title field is blank', () => {
      const titleInput: HTMLInputElement = fixture.nativeElement.querySelector('input#title');
      titleInput.value = '';
      titleInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const errorMessage = fixture.nativeElement.querySelector('div');
      expect(errorMessage.textContent).toContain('Title is required');
    });

    it('should display "Content is required" error message when content field is blank', () => {
      const contentTextarea: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea#content');
      contentTextarea.value = '';
      contentTextarea.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const errorMessage = fixture.nativeElement.querySelector('div#error-content');
      expect(errorMessage).toBeTruthy();
      expect(errorMessage.textContent).toContain('Content is required');
    });

    it('should display "Author is required" error message when author field is blank', () => {
      const authorInput: HTMLInputElement = fixture.nativeElement.querySelector('input#author');
      authorInput.value = '';
      authorInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const errorMessage = fixture.nativeElement.querySelector('div#error-author');
      expect(errorMessage).toBeTruthy();
      expect(errorMessage.textContent).toContain('Author is required');
    });

    it('should display "Date is required" error message when date field is blank', () => {
      const dateInput: HTMLInputElement = fixture.nativeElement.querySelector('input#date');
      dateInput.value = '';
      dateInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const errorMessage = fixture.nativeElement.querySelector('div#error-date');
      expect(errorMessage).toBeTruthy();
      expect(errorMessage.textContent).toContain('Date is required');
    });
  });
});