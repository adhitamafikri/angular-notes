import { createReducer, on, Action } from '@ngrx/store'
import { createNote } from './create-note-page.actions'

type State = {
  note: {
    title: string,
    content: string
  }
}

export const initialState: State = {
  note: {
    title: '',
    content: ''
  }
}

const createNotePageReducer = createReducer(
  initialState,
  on(createNote, (state, { note }) => ({ ...state, note: { ...note } }))
)

export function reducer(state: State | undefined, action: Action) {
  return createNotePageReducer(state, action)
}