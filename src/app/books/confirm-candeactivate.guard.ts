import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

@Injectable()
export class ConfirmCandeactivateGuard
  implements CanDeactivate<BookDetailComponent> {
  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) {
    if (nextState) {
      if (nextState.url.startsWith(currentState.url)) {
        return true;
      }
    }

    return component.canLeave;

    // return confirm('Willste schon weg? 🧐');
  }
}
