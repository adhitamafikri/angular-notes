import { createAction, props } from '@ngrx/store'

type noteType = {
  id: string,
  title: string,
  content: string,
}

export const createNote = createAction(
  '[Global] Create Note',
  props<{ note: noteType }>()
)

export const deleteNote = createAction(
  '[Global] Delete Note',
  props<{ id: string }>()
)

export const editNote = createAction(
  '[Global] Edit Note',
  props<{ note: noteType }>()
)

export const greetUser = createAction(
  '[Global] Greet User',
  props<{ user: string }>()
)
