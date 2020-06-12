import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoteListComponent } from './note-list.component';
import { NoteItemModule } from '../note-item/note-item.module';

@NgModule({
  imports: [CommonModule, NoteItemModule],
  exports: [NoteListComponent],
  declarations: [NoteListComponent],
  providers: [],
})
export class NoteListModule {}
