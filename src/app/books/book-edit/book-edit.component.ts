import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookDataService, Book } from '../book-data.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ba-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) {
    // tslint:disable-next-line: no-non-null-assertion
    this.route.params
      .pipe(
        map((params: Params) => params.isbn),
        switchMap((isbn) => this.bookData.getBookByIsbn(isbn))
      )
      .subscribe((book) => {
        this.book = book;
      });
  }

  ngOnInit(): void {}

  save(formValues: any) {
    console.log((formValues as Book).isbn);

    const updatedBook: Book = Object.assign(this.book, formValues);
    this.bookData.updateBook(updatedBook).subscribe((book) => {
      console.log(book);
      this.book = book;
    });
  }
}
