import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromNotes from './notes.reducer'

export const getNotesState = createFeatureSelector<fromNotes.NotesState>('notes')
export const getNotes = createSelector(getNotesState, fromNotes.getNotes)
