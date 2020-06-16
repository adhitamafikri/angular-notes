import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import * as fromNotes from './../../store/notes/notes.reducer'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  /**
   * states
   */
  title: string = 'Home Page component!'

  constructor(private store: Store<fromNotes.NotesState>) { }

  ngOnInit() {
    this.store.select<any>('notes').subscribe(state => {
      console.log('states form notes')
      console.log(state)
      console.log(state.notes)
    })
  }
}
