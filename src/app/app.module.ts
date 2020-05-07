import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, InfoBoxComponent, MouseCursorComponent, TitleBoxComponent, BookListComponent],
  imports: [BrowserModule, BooksModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
