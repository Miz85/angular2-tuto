import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list.component';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
