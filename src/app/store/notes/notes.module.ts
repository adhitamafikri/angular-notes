import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import * as fromNotes from './notes.reducer'

@NgModule({
  imports: [
    StoreModule.forFeature(fromNotes.featureKey, fromNotes.reducer)
  ]
})
export class NotesReducerModule { }
