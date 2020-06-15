import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  /**
   * states
   */
  title: string = 'Home Page component!'
  noteList$: Observable<object>

  constructor(private store: Store<{ home }>) {
    this.noteList$ = store.pipe(select('home'))
    console.log('something')
  }

  ngOnInit() {
    console.log('homepage', this.title)
  }
}
