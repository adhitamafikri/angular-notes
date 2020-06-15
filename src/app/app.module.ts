import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AppStoreModule } from './store/store.module'
// import * as HomePageReducer from './store/home-page/home-page.reducer'

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NgbModule, AppStoreModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
