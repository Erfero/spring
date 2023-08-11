import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';
import { AlbumComponent } from './admin/album/album.component';

const albumsRoutes: Routes = [
  {
    path: " ", redirectTo: "/albums",
    pathMatch: "full"
  },
  {
    path: "albums",
    component: AlbumsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "album/:id",
    component: AlbumDescriptionComponent
  },


  // {
  //   path: "not-found",
  //   component: NotFoundComponent
  // },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
