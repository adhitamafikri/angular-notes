import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateNotePageComponent } from './pages/create-note-page/create-note-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: CreateNotePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
