import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CreateNotePageComponent } from './pages/create-note-page/create-note-page.component';
import { CreateNotePageModule } from './pages/create-note-page/create-note-page.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: CreateNotePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, CreateNotePageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
