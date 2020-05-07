import { Component, OnInit } from '@angular/core';

interface Book {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ba-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [
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

  ngOnInit(): void {}
}
