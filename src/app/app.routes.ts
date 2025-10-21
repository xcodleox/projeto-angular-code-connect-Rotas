import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: "registro", loadComponent: () => import('./paginas/registro/registro.component').then((c) => (c.RegistroComponent)) },
    { path: "posts", loadComponent: () => import('./paginas/lista-postagem/lista-postagem.component').then((c) => (c.ListaPostagemComponent)) },
    {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
    }

];
