import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book, BookDataService } from '../books/book-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  subscription: Subscription = Subscription.EMPTY;

  constructor(public bookData: BookDataService) {}

  ngOnInit(): void {
    this.subscription = this.bookData.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
