import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Note } from 'src/app/models/note.model'
import * as fromNotes from 'src/app/store/notes/notes.reducer'
import * as fromNotesSelector from 'src/app/store/notes/notes.selectors'

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  /**
   * states
   */
  notes$: Observable<Note[]>

  constructor(private store: Store<fromNotes.NotesState>) { }

  ngOnInit() {
    this.notes$ = this.store.select(fromNotesSelector.getNotes)
  }
}
