import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, HttpClientModule, BooksRoutingModule],
  exports: [BooksComponent],
})
export class BooksModule {}
