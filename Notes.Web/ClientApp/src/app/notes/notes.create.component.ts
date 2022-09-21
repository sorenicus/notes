import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/services/notes.service';
import { CreateNote } from '../models/createNote';
import { Note } from '../models/Note';

@Component({
  selector: 'app-create-note',
  templateUrl: './notes.create.component.html',
})
export class NotesCreateComponent{
  notesService: NotesService;
  note: CreateNote;

  constructor(notesService: NotesService, private router: Router)
  {
    this.note = new CreateNote();
    this.notesService = notesService;
  }

  createNote()
  {
    this.notesService.Create(this.note).subscribe(() => this.router.navigateByUrl('/'));
  }
}
