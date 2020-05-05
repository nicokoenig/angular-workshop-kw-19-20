import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  title = 'foobar';

  constructor() {}

  ngOnInit(): void {}
}
