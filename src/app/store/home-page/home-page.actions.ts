import { createAction, props } from '@ngrx/store'

export const loadNotes = createAction('[Home Page] Load Notes')
export const greetUser = createAction('[Home Page] Greet User', props<{ name: string }>())
