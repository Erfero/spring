import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Album, List, SortAlbumCallback } from './album';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  subjectAlbum = new Subject<Album>();

  private _albumsUrl: string = environment.albumUrl //convention private & protected
  private _albumsListUrl: string = environment.albumListUrl;

  sendCurrentNumberPage = new Subject<number>

  constructor(private http: HttpClient) {
    // console.log(`${this.albumService.}, album trouvés`);

  };
  /**
   * fonctions de recherche de tous les albums
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Observable<Album[]> {
    // return this._albums.sort((a: Album, b: Album) => a.duration - b.duration);
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        return albums.sort((a: Album, b: Album) => b.duration - a.duration)
      })
    )
  };

  /** 
   * Fonction de recherche des sons d'un album
   * @param
  */

  getAlbum(id: string): Observable<Album> | undefined {

    return this.http.get<Album>(this._albumsUrl + "/" + id)
      .pipe(
        map((album: Album) => album)
      )
  }

  getAlbumList(id: string): Observable<List> | undefined {

    return this.http.get<List>(this._albumsListUrl + "/" + id)

  }
  /**
   * Fonction qui retourne le nombre d'albums
   * @returns le nombre d'albums
   */
  count() {

    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => albums.length)
    );
  }

  // AlbumService
  paginate(start: number, end: number): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums) => albums.sort(
        (a, b) => b.duration - a.duration
      ).slice(start, end))
    )
  }


  // order(callBack: SortAlbumCallback): AlbumService {
  //   this._albums.sort(callBack);
  //   return this;
  // }

  // limit(start: number, end: number): AlbumService {
  //   this._albums = this._albums.slice(start, end)
  //   return this
  // }

  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        return albums.filter(album => {
          return album.title
            .toLowerCase()
            .includes(word.trim().toLowerCase());
        })
      }

      ))
  }




  // searchV2(word: string): Album[] {
  //   let re = new RegExp(word.trim(), "g");
  //   return this._albums.filter(album => album.title.match(re));
  // }

  paginateNumberPage(): number {
    return environment.numberPage
  }
  /**
   * Méthode qui signale à tous les composants 
   * de la page actuelle
   * @param numberPage  numéro de la page en cours
   * @returns 
   */
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }

  // Méthode qui permet de changer le status d'un album à "on"
  switchOn(album: Album): void {
    album.status = "on";
    this.http.put<void>(this._albumsUrl + "/" + album.id, album)
      .subscribe({
        next: (e) => console.log(e),
        error: (err) => console.warn(err),
        complete: () => this.subjectAlbum.next(album)
      })
  }


  // Méthode qui permet de changer le status d'un album à "off"
  switchOff(album: Album): void {

    album.status = "off";
    this.http.put<void>(`${this._albumsUrl} / ${album.id}`, album)
      .subscribe(() => { });
  }

}
