import { Routes } from "@angular/router";
import { AboutPage } from "@pages/about/about.page";
import { StructurePage } from "@pages/about/structure.page";
import { ProjectPage } from '@pages/project/project.page';

export const AboutRoutes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'structure',
    component: StructurePage
  },
  {
    path: 'history',
    component: StructurePage
  }
];
