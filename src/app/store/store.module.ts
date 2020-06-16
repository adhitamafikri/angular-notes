import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import { NotesReducerModule } from './notes/notes.module'

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    NotesReducerModule
  ],
})
export class AppStoreModule { }
