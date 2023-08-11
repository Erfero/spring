import { Component } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audip-player',
  templateUrl: './audip-player.component.html',
  styleUrls: ['./audip-player.component.css']
})
export class AudipPlayerComponent {

  showPlayer: boolean = false;

  // variable representant l'album joué 
   playedAlbum! : Album;

  // variable représentant le nombre total de sons dans l'album

  total: number = 1;

  // variable réprésentant le numéro du son joué actuellement (1 / 4)

  currentSongNumber: number = 1;

  // variable représentant le pourcentage de son joué (25% pour 1/4, 50% pour 2/4, 75% pour 3/4 et 100% pour 4/4)
  ratio: number = 0;

  constructor(
    private albumService: AlbumService) { }


    ngOnInit(): void {
      // souscrire au Sujet "selectAlbum"
      this.albumService.subjectAlbum.subscribe(
        {
          next: (a: Album) => {
            console.log("ablum reçu", a);
            this.playedAlbum = a;
            // afficher les composants
            this.showPlayer = true;

            // le son joué en 1er est  le n°1
            this.currentSongNumber = 1;
            let duration: number = this.playedAlbum.duration;
            this.total = Math.floor(duration / 120);


            this.ratio = (100 / this.total);

            // Variable réprésentant le % à ajouter après chaque son dans la barre de progression
           
            let step = this.ratio;  // il faut à chaque fois augmenter un ratio
            const intervalId = setInterval(() => {
              this.currentSongNumber++;
              this.ratio += step;
              if (this.ratio > 100) {
                clearInterval(intervalId);
                this.showPlayer = false;
                this.albumService.switchOff(this.playedAlbum);
              }
            }, 1000 * 120)


            
          }
        }
      )
    }
}
