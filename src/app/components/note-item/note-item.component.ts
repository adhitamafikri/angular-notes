import { Component, OnInit, Input } from '@angular/core';

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
  title: string = '';
  @Input()
  content: string = '';

  ngOnInit() {
    console.log('This is note item');
  }
}
