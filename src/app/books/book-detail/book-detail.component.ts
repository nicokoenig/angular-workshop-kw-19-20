import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookDataService, Book } from '../book-data.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ba-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) {
    this.route.params
      .pipe(
        map((params: Params) => (params as BookDetailParams).isbn),
        switchMap((isbn) => this.bookData.getBookByIsbn(isbn))
      )
      .subscribe((book) => {
        this.book = book;
      });

    // this.route.params.subscribe((params: Params) => {
    //   const isbn = params.isbn;
    //   this.bookData.getBookByIsbn(isbn).subscribe((book) => {
    //     this.book = book;
    //   });
    // });
  }

  ngOnInit(): void {}
}

interface BookDetailParams {
  isbn: string;
}
