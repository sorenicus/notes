import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NotesComponent } from './notes/notes.component';
import { NotesCreateComponent } from './notes/notes.create.component';
import { CounterComponent } from './counter/counter.component';
import { NotesService } from 'src/services/notes.service';
import { NotesEditComponent } from './notes/notes.edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NotesComponent,
    CounterComponent,
    NotesCreateComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: NotesComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'createnote', component: NotesCreateComponent },
      { path: 'note/:id', component: NotesEditComponent },
    ])
  ],
  providers: [{provide: NotesService, useClass: NotesService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
