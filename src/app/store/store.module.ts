import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import * as HomePageReducer from './home-page/home-page.reducer'
// import * as CreateNotePageReducer from './create-note-page/create-note-page.reducer'

@NgModule({
  imports: [StoreModule.forRoot({
    home: HomePageReducer.reducer,
    // createNote: CreateNotePageReducer.reducer
  })],
})
export class AppStoreModule { }
