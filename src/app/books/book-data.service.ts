import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BooksModule } from './books.module';

export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  author: string;
}

@Injectable()
export class BookDataService {
  private baseUrl = 'http://localhost:4730';

  constructor(private http: HttpClient) {
    console.log('🎉');

    // tslint:disable-next-line: no-eval
    eval('window["bookService"]=this;');
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${isbn}`);
  }

  createNewBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books`, newBook);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${this.baseUrl}/books/${book.isbn}`, book);
  }
}
