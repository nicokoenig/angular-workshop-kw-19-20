import { Injectable } from '@angular/core';

export interface Book {
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  private books: Book[] = [
    {
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software',
    },
    {
      title: 'REST und HTTP',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming',
    },
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }
}
