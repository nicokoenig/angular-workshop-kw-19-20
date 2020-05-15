import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book, BookDataService } from '../book-data.service';
import { Subscription, Observable } from 'rxjs';
import { BooksApiService, BookApiModel } from 'src/api';
@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<BookApiModel[]>;

  subscription: Subscription = Subscription.EMPTY;

  // constructor(public bookData: BookDataService) {
  //   this.books$ = this.bookData.getBooks();
  // }

  constructor(public bookData: BooksApiService) {
    this.books$ = this.bookData.getBooks();
  }
}
