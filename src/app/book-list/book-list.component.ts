import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book, BookDataService } from '../books/book-data.service';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<Book[]>;

  subscription: Subscription = Subscription.EMPTY;

  constructor(public bookData: BookDataService) {
    this.books$ = this.bookData.getBooks();
  }
}
