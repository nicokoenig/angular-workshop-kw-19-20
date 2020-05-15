import { Component, ViewEncapsulation } from '@angular/core';
import { BookDataService } from './books/book-data.service';

@Component({
  selector: 'ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  color = 'hotpink';

  visible = true;

  title = 'books-app';

  result = `<h3>Tolle news!</h3><p>aklödsfjklajsdf</p>
    <script>
      alert('trolololol');

    </script>

  `;

  log(message: string) {
    console.log(message);
  }
}
