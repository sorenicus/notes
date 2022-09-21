import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { Note } from '../models/Note';

@Component({
  selector: 'app-home',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  notesService: NotesService;
  notes: Note[];

  constructor(notesService: NotesService)
  {
    this.notes = [];
    this.notesService = notesService;
  }

  ngOnInit()
  {
    this.refreshNotes();
  }

  refreshNotes()
  {
    this.notesService.GetAll().subscribe(result => this.notes = result);
  }

  deleteNote(note: Note)
  {
    this.notesService.Delete(note.id).subscribe(() => this.refreshNotes());
  }
}
