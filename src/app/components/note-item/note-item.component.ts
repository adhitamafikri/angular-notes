import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'

import { Note } from 'src/app/models/note.model'

import * as fromNotes from 'src/app/store/notes/notes.reducer'
import * as fromNotesAction from 'src/app/store/notes/notes.actions'

@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent {
  /**
   * @props
   */
  @Input()
  note: Note

  /**
   * @constructor
   */
  constructor(private store: Store<fromNotes.NotesState>) { }

  /**
   * Delete the corresponding note
   * @param {String} noteId
   */
  onDeleteClick(noteId) {
    this.store.dispatch(fromNotesAction.deleteNote({ id: noteId }))
  }
}
