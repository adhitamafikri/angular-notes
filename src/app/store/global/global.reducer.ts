import { createReducer, on } from '@ngrx/store'
import { createNote, deleteNote, editNote, greetUser } from './global.actions'

type noteType = {
  id: string,
  title: string,
  content: string,
}

type State = {
  notes: noteType[],
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
    const temp = state.notes.map(item => {
      if (item.id !== id) return item
    })
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
