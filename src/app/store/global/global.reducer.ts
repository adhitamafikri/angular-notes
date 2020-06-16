import { createReducer, on, Action } from '@ngrx/store'
import { createNote, deleteNote, editNote, greetUser } from './global.actions'
import { Note } from './../models/note.model'

interface State {
  notes: Note[],
  greetings: string
}

export const initialState: State = {
  notes: [],
  greetings: ''
}

const globalReducer = createReducer(
  initialState,
  on(createNote, (state, { note }) => {
    return {
      ...state,
      note: { ...note }
    }
  }),
  on(deleteNote, (state, { id }) => {
    const temp = state.notes.filter(item => item.id !== id)
    return {
      ...state,
      notes: [...temp]
    }
  }),
  on(editNote, (state, { note }) => {
    const temp = state.notes.map(item => {
      if (item.id === note.id) {
        const newItem = {
          ...item,
          title: note.title,
          content: note.content,
        }
        item = { ...newItem }
      }
      return item
    })

    return {
      ...state,
      notes: [...temp]
    }
  }),
  on(greetUser, (state, { user }) => {
    alert(`Hellow ${user}! Welcome to Angular Notes App!`)
    return { ...state }
  })
)

export function reducer(state: State | undefined, action: Action) {
  return globalReducer(state, action)
}
