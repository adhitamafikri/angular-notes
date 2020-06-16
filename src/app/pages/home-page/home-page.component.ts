import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  /**
   * states
   */
  title: string = 'Home Page component!'

  ngOnInit() {
    console.log('Home Page')
  }
}
