import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(m => m.AboutComponent)
  },

  {
    path: 'albums',
    loadComponent: () =>
      import('./albums/albums.component').then(m => m.AlbumsComponent)
  },

  {
    path: 'albums/:id',
    loadComponent: () =>
      import('./album-detail/album-detail.component').then(m => m.AlbumDetailComponent)
  },

  {
    path: 'albums/:id/photos',
    loadComponent: () =>
      import('./album-photos/album-photos.component').then(m => m.AlbumPhotosComponent)
  }
];
