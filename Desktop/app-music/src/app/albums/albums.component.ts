import { Component, OnInit } from '@angular/core';
// importez la définition de la classe et des albums
import { fadeInAnimation } from '../animation.module';
import { Album, List } from "../album";
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page princiaple Albums Music";
  albums: Album[] | undefined = undefined;
  lists: List[] = [];
  selectedAlbum! : Album;
  status: string | null = null

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() : void { 
    this.albumService
    .paginate(0, this.albumService.paginateNumberPage())
    .subscribe({
      next:(alb: Album[]) =>
      this.albums = alb
    })
  }
  
    
  // ngOnInit(): void {

  // }

  onSelect(newAlbum: Album) {
    this.selectedAlbum = newAlbum;
  }

  playParent($event: Album) {
   this.status = $event.id ;
  }
  
  search($event: Album[]) {
    console.log(`Parent sera mis à jour et affichera seulement les albums ${$event}`);
    if ($event) {
      this.albums = $event;
    }
  }

  onSetPaginage($event: {start: number, end: number}) {

      this.albumService.paginate($event.start, $event.end)
      .subscribe({
        next: (alb: Album[]) => this.albums = alb
      })
    // this.albums = this.albumService.paginate($event.start, $event.end)
  }
  
}


