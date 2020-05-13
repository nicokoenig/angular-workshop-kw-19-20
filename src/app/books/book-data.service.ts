import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BooksModule } from './books.module';

export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
}

@Injectable()
export class BookDataService {
  private baseUrl = 'http://localhost:4730';

  constructor(private http: HttpClient) {
    console.log('🎉');
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${isbn}`);
  }
}
