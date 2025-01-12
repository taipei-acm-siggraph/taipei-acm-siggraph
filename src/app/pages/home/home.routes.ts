import { Routes } from "@angular/router";
import { HomePage } from "./home.page";
import { ProjectPage } from "@pages/project/project.page";

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'info/meeting',
    component: ProjectPage
  },
  {
    path: 'info/act',
    component: ProjectPage
  },
  {
    path: 'info/callforpaper',
    component: ProjectPage
  },
  {
    path: 'info/paper',
    component: ProjectPage
  },
  {
    path: 'info/volunteer',
    component: ProjectPage
  }
];
