import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;
  editedTitle: string = '';
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("DETAIL ID:", id);

    this.albumService.getAlbum(id).subscribe({
      next: data => {
        console.log("DETAIL DATA:", data);
        this.album = data;
        this.loading = false;
      },
      error: err => {
        console.error("DETAIL ERROR:", err);
        this.loading = false;
      }
    });
  }

  save(): void {
    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
      alert('Album updated!');
    });
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
