/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BookApiModel } from '../models/book-api-model';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBooks
   */
  static readonly GetBooksPath = '/books';

  /**
   * get all books
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBooks()` instead.
   *
   * This method doesn't expect any response body
   */
  getBooks$Response(params?: {

  }): Observable<StrictHttpResponse<Array<BookApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, BooksApiService.GetBooksPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BookApiModel>>;
      })
    );
  }

  /**
   * get all books
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBooks$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getBooks(params?: {

  }): Observable<Array<BookApiModel>> {

    return this.getBooks$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BookApiModel>>) => r.body as Array<BookApiModel>)
    );
  }

  /**
   * Path part for operation createBook
   */
  static readonly CreateBookPath = '/books';

  /**
   * POST book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createBook()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createBook$Response(params: {

  
  /**
   * book object
   */
  body: BookApiModel
  }): Observable<StrictHttpResponse<BookApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, BooksApiService.CreateBookPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BookApiModel>;
      })
    );
  }

  /**
   * POST book
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createBook$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createBook(params: {

  
  /**
   * book object
   */
  body: BookApiModel
  }): Observable<BookApiModel> {

    return this.createBook$Response(params).pipe(
      map((r: StrictHttpResponse<BookApiModel>) => r.body as BookApiModel)
    );
  }

  /**
   * Path part for operation getBookByIsbn
   */
  static readonly GetBookByIsbnPath = '/books/{isbn}';

  /**
   * GET book by isbn
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookByIsbn()` instead.
   *
   * This method doesn't expect any response body
   */
  getBookByIsbn$Response(params: {

    /**
     * isbn of the book
     */
    isbn: string;

  }): Observable<StrictHttpResponse<BookApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, BooksApiService.GetBookByIsbnPath, 'get');
    if (params) {

      rb.path('isbn', params.isbn);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BookApiModel>;
      })
    );
  }

  /**
   * GET book by isbn
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBookByIsbn$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getBookByIsbn(params: {

    /**
     * isbn of the book
     */
    isbn: string;

  }): Observable<BookApiModel> {

    return this.getBookByIsbn$Response(params).pipe(
      map((r: StrictHttpResponse<BookApiModel>) => r.body as BookApiModel)
    );
  }

  /**
   * Path part for operation updateBookByIsbn
   */
  static readonly UpdateBookByIsbnPath = '/books/{isbn}';

  /**
   * update book by isbn
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBookByIsbn()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateBookByIsbn$Response(params: {
    isbn: string;

  
  /**
   * Book object
   */
  body: BookApiModel
  }): Observable<StrictHttpResponse<BookApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, BooksApiService.UpdateBookByIsbnPath, 'put');
    if (params) {

      rb.path('isbn', params.isbn);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BookApiModel>;
      })
    );
  }

  /**
   * update book by isbn
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateBookByIsbn$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateBookByIsbn(params: {
    isbn: string;

  
  /**
   * Book object
   */
  body: BookApiModel
  }): Observable<BookApiModel> {

    return this.updateBookByIsbn$Response(params).pipe(
      map((r: StrictHttpResponse<BookApiModel>) => r.body as BookApiModel)
    );
  }

}
