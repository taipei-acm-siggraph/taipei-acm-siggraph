import { Routes } from "@angular/router";
import { SponsorPage } from "@pages/sponsor/sponsor.page";
import { ProjectPage } from '@pages/project/project.page';

export const SponsorRoutes: Routes = [
  {
    path: '',
    component: SponsorPage
  },
  {
    path: 'agency',
    component: ProjectPage
  },
  {
    path: 'personal',
    component: ProjectPage
  }
];
