import { Component, Input } from '@angular/core'

type NotePropType = {
  title: string
  content: string
}

@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent {
  /**
   * props
   */
  @Input()
  note: NotePropType = null
}
