import { Component, OnInit } from '@angular/core';
import { Book, BookDataService } from '../books/book-data.service';

@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(public bookData: BookDataService) {
    this.books = this.bookData.getBooks();
  }

  ngOnInit(): void {}
}
