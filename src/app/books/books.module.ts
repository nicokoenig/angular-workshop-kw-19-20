import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent,
    BookListComponent,
    BookEditComponent,
    BookNewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookDataService, ConfirmCandeactivateGuard],
  exports: [BooksComponent],
})
export class BooksModule {}
