import { Routes } from "@angular/router";
import { MemberPage } from "@pages/member/member.page";
import { ProjectPage } from '@pages/project/project.page';

export const MemberRoutes: Routes = [
  {
    path: '',
    component: MemberPage
  },
  {
    path: 'aboutRule',
    component: ProjectPage
  },
  {
    path: 'fee',
    component: ProjectPage
  }
];
