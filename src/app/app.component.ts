import { Component } from '@angular/core';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = 'hotpink';

  title = 'books-app';

  log(message: string) {
    console.log(message);
  }
}
