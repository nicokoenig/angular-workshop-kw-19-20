import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';

@NgModule({
  declarations: [BooksComponent, BookDetailComponent, BookListComponent],
  imports: [CommonModule, HttpClientModule, BooksRoutingModule],
  providers: [BookDataService, ConfirmCandeactivateGuard],
  exports: [BooksComponent],
})
export class BooksModule {}
