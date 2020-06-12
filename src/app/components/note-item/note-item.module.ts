import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoteItemComponent } from './note-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [NoteItemComponent],
  declarations: [NoteItemComponent],
  providers: [],
})
export class NoteItemModule {}
