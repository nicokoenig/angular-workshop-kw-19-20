import { Component } from '@angular/core';
import { BookDataService } from './books/book-data.service';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = 'hotpink';

  visible = true;

  title = 'books-app';

  log(message: string) {
    console.log(message);
  }
}
