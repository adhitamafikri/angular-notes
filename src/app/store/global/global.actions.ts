import { createAction, props } from '@ngrx/store'
import { Note } from './../models/note.model'

export const createNote = createAction(
  '[Global] Create Note',
  props<{ note: Note }>()
)

export const deleteNote = createAction(
  '[Global] Delete Note',
  props<{ id: string }>()
)

export const editNote = createAction(
  '[Global] Edit Note',
  props<{ note: Note }>()
)

export const greetUser = createAction(
  '[Global] Greet User',
  props<{ user: string }>()
)
