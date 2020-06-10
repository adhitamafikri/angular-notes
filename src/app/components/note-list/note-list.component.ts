import { Component } from '@angular/core';

type NoteListStateType = {
  id: number;
  title: string;
  content: string;
};

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  /**
   * states
   */
  notes: NoteListStateType[] = [
    { id: 1, title: 'Baseus', content: 'Hello Baseus' },
    { id: 2, title: 'Balenciagaa', content: 'Good Morning from Balenciagaa' },
    { id: 3, title: 'Hugo', content: 'Good Night from Hugo' },
  ];
}
