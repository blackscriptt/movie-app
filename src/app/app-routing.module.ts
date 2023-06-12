import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
// import { Movies } from './models/movies.datasource';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'  },
  { path: 'index', component: IndexComponent },
  { path: 'movies', component: MoviesComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'add', component: MovieAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
