import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import * as HomePageReducer from './home-page/home-page.reducer'

@NgModule({
  imports: [StoreModule.forRoot({
    home: HomePageReducer.reducer
  })],
})
export class AppStoreModule { }
