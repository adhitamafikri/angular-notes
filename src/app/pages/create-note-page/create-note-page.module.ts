import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreateNotePageComponent } from './create-note-page.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: [CreateNotePageComponent],
  declarations: [CreateNotePageComponent],
})
export class CreateNotePageModule {}
