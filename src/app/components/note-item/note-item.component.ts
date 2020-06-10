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
  private title: string = '';
  @Input()
  private content: string = '';

  ngOnInit() {
    console.log('This is note item');
  }
}
