import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio) },
  { path: 'catalogo', loadComponent: () => import('./pages/catalogo/catalogo').then(m => m.Catalogo) },
  { path: 'itinerario', loadComponent: () => import('./pages/itinerario/itinerario').then(m => m.Itinerario) },
  { path: 'inscripcion', loadComponent: () => import('./pages/inscripcion/inscripcion').then(m => m.Inscripcion) },
  { path: 'guia-estilo', loadComponent: () => import('./pages/guia-estilo/guia-estilo').then(m => m.GuiaEstilo) },
  { path: '**', redirectTo: '' }
];