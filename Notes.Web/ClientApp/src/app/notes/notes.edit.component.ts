import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/services/notes.service';
import { CreateNote } from '../models/createNote';
import { Note } from '../models/Note';
import { UpdateNote } from '../models/updateNote';

@Component({
  selector: 'app-edit-note',
  templateUrl: './notes.edit.component.html',
})
export class NotesEditComponent implements OnInit{
  notesService: NotesService;
  note: Note;
  id: number;

  constructor(notesService: NotesService, private router: Router, private route: ActivatedRoute)
  {
    this.note = new Note();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.notesService = notesService;
  }

  ngOnInit() {
    this.notesService.Get(this.id).subscribe(result => this.note = result);
  }

  updateNote()
  {
    var updateNote = new UpdateNote();
    updateNote.text = this.note.text;
    this.notesService.Update(this.note.id, updateNote).subscribe(() => this.router.navigateByUrl('/'));
  }
}
