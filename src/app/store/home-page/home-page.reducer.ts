import { createReducer, on, Action } from '@ngrx/store'
import { loadNotes, greetUser } from './home-page.actions'

export type State = {
  notes: object[],
  greetings: string
}

export const initialState: State = {
  notes: [
    { id: 1, title: 'Baseus', content: 'Hello Baseus' },
    { id: 2, title: 'Balenciagaa', content: 'Good Morning from Balenciagaa' },
    { id: 3, title: 'Hugo', content: 'Good Night from Hugo' },
  ],
  greetings: ''
}

const homePageReducer = createReducer(initialState,
  on(loadNotes, state => ({ ...state })),
  on(greetUser, (state, { name }) => ({ ...state, greetings: `Hello, ${name}! Welcome to Angular Notes App!` }))
)

export function reducer(state: State | undefined, action: Action) {
  return homePageReducer(state, action)
}
