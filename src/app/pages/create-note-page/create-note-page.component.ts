import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { v4 as uuidv4 } from 'uuid'

import * as fromNotes from 'src/app/store/notes/notes.reducer'
import * as fromNotesActions from 'src/app/store/notes/notes.actions'

@Component({
  selector: 'create-note-page',
  templateUrl: './create-note-page.component.html',
})
export class CreateNotePageComponent {
  /**
   * states
   */
  noteForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  /**
   * @constructor
   */
  constructor(private store: Store<fromNotes.NotesState>) { }

  /**
   * methods
   */
  onSubmit(e) {
    e.preventDefault();
    console.log('the value is', this.noteForm)
    const fd = this.noteForm.value

    if (fd.title.length && fd.content.length) {
      const id = uuidv4()
      const payload = {
        id,
        title: fd.title,
        content: fd.content
      }

      // create a new note
      this.store.dispatch(fromNotesActions.createNote({ note: payload }))
      alert('Created a new note!')
    } else {
      alert('Please complete all fields')
    }
  }
}
