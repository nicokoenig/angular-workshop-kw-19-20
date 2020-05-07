import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ba-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() title = '';

  @Output() titleClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitClick() {
    this.titleClicked.emit('foobar');
  }
}
