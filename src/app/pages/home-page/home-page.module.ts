import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HomePageComponent } from './home-page.component';
import { NoteListModule } from './../../components/note-list/note-list.module';

@NgModule({
  imports: [CommonModule, NoteListModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
})
export class HomePageModule { }
