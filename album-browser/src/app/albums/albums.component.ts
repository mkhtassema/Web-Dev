import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("TEST STARTED");

    this.albums = [
      { id: 1, userId: 1, title: 'Test Album 1' },
      { id: 2, userId: 1, title: 'Test Album 2' },
      { id: 3, userId: 1, title: 'Test Album 3' }
    ];
  }

  goToDetails(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
