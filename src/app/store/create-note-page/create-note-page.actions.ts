import { createAction, props } from '@ngrx/store'

type noteType = {
  title: string,
  content: string,
}

export const createNote = createAction(
  '[Create Note Page] Create Note',
  props<{ note: noteType }>()
)
