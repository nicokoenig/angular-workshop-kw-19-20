import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, InfoBoxComponent],
  imports: [BrowserModule, BooksModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}