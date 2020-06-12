import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { NoteListModule } from './../../components/note-list/note-list.module';

@NgModule({
  imports: [NoteListModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
