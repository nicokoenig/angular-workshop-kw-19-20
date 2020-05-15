import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, BookDataService } from '../book-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  emptyBook: Book = {
    title: '',
    subtitle: '',
    isbn: '',
    abstract: '',
    author: '',
  };

  constructor(
    private fb: FormBuilder,
    private bookData: BookDataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  saveNewBook() {
    const newBook: Book = Object.assign(this.emptyBook, this.form.value);
    this.bookData.createNewBook(newBook).subscribe((book) => {
      debugger;
      console.log('neues buch: ', book);
      this.router.navigateByUrl(`/books/${book.isbn}`);
    });
  }
}
