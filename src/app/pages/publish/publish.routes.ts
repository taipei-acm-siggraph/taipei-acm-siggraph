import { Routes } from "@angular/router";
import { PublishPage } from "@pages/publish/publish.page";
import { ProjectPage } from '@pages/project/project.page';

export const PublishRoutes: Routes = [
  {
    path: '',
    component: PublishPage
  },
  {
    path: 'periodical',
    component: ProjectPage
  },
];
