import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/Note';
import { CreateNote } from 'src/app/models/createNote';
import { UpdateNote } from 'src/app/models/updateNote';

@Injectable()
export class NotesService {
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  Get(id: number) : Observable<Note>
  {
    return this.http.get<Note>(this.baseUrl + "notes/" + id);
  }

  GetAll() : Observable<Note[]>
  {
    return this.http.get<Note[]>(this.baseUrl + "notes");
  }

  Delete(id: number)
  {
    return this.http.delete(this.baseUrl + "notes/" + id);
  }

  Create(note: CreateNote)
  {
    return this.http.post(this.baseUrl + "notes", note);
  }

  Update(id: number, note: UpdateNote)
  {
    return this.http.put(this.baseUrl + "notes/" + id, note);
  }
}


