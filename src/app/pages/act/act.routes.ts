import { Routes } from '@angular/router';
import { ActPage } from '@pages/act/act.page';
import { ProjectPage } from '@pages/project/project.page';

export const ActRoutes: Routes = [
  {
    path: '',
    component: ActPage
  },
  {
    path: 'paper',
    component: ProjectPage
  },
  {
    path: 'scholarship',
    component: ProjectPage
  }
];
