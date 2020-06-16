import { createSelector } from '@ngrx/store'

type NoteType = {
  id: string,
  title: string,
  content: string
}

type AppState = {
  notes: NoteType[]
}

export const selectNotesFeature = (state: AppState) => state.notes

export const selectNotes = createSelector(
  selectNotesFeature,
  (notes: NoteType[]) => notes
)
