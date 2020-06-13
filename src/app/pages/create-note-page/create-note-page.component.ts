import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-note-page',
  templateUrl: './create-note-page.component.html',
})
export class CreateNotePageComponent {
  noteForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  /**
   * methods
   */
  onSubmit(e) {
    e.preventDefault();
    console.log('the value is', this.noteForm)
  }
}
