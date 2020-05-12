import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  private baseUrl = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${isbn}`);
  }
}
