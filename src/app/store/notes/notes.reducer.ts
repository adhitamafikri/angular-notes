import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store'
import { createNote, deleteNote, editNote } from './notes.actions'
import { Note } from './../../models/note.model'

/**
 * Feature key
 */
export const featureKey = 'notes'

/**
 * @Reducers
 */
export interface NotesState {
  notes: Note[],
}

export const initialState: NotesState = {
  notes: [
    { id: '1', title: 'Baseus', content: 'Hello Baseus' },
    { id: '2', title: 'Balenciagaa', content: 'Good Morning from Balenciagaa' },
    { id: '3', title: 'Hugo', content: 'Good Night from Hugo' },
  ],
}

const notesReducer = createReducer(
  initialState,
  on(createNote, (state, { note }) => {
    return {
      ...state,
      notes: [...state.notes, { ...note }]
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
)

export function reducer(state: NotesState | undefined, action: Action) {
  return notesReducer(state, action)
}

/**
 * @Selectors will be imported in {name}.selectors.ts
 */
export const getNotes = (state: NotesState) => state.notes
