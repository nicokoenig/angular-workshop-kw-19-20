import { Component, OnInit } from '@angular/core';
import { Book, BookDataService } from '../books/book-data.service';
import { debounceTime, delay } from 'rxjs/operators';
@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(public bookData: BookDataService) {
    this.bookData.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnInit(): void {}
}
