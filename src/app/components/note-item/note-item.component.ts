import { Component, OnInit, Input } from '@angular/core';

type NotePropType = {
  title: string;
  content: string;
};

@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {
  /**
   * props
   */
  @Input()
  note: NotePropType = null;

  ngOnInit() {
    console.log('This is note item');
  }
}
