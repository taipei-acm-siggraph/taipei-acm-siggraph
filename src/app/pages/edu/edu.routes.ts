import { Routes } from "@angular/router";
import { EduPage } from "@pages/edu/edu.page";
import { ProjectPage } from '@pages/project/project.page';

export const EduRoutes: Routes = [
  {
    path: '',
    component: EduPage
  },
  {
    path: 'info',
    component: ProjectPage
  },
  {
    path: 'company',
    component: ProjectPage
  },
  {
    path: 'share',
    component: ProjectPage
  },
  {
    path: 'link',
    component: ProjectPage
  },
  {
    path: 'conference',
    component: ProjectPage
  },
  {
    path: 'staff',
    component: ProjectPage
  },
  {
    path: 'agency',
    component: ProjectPage
  },
  {
    path: 'experiment',
    component: ProjectPage
  }
];
