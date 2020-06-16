import { createAction, props } from '@ngrx/store'
import { Note } from '../../models/note.model'

export const createNote = createAction(
  '[Notes] Create',
  props<{ note: Note }>()
)

export const deleteNote = createAction(
  '[Notes] Delete',
  props<{ id: string }>()
)

export const editNote = createAction(
  '[Notes] Edit',
  props<{ note: Note }>()
)
