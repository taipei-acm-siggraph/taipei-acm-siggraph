import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.routes').then(m => m.HomeRoutes)
  },
  {
    path: 'about',
    loadChildren: () => import('@pages/about/about.routes').then(m => m.AboutRoutes)
  },
  // {
  //   path: 'project',
  //   loadChildren: () => import('@pages/project/project.routes').then(m => m.ProjectRoutes)
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('@pages/blog/blog.routes').then(m => m.BlogRoutes)
  // },
  {
    path: 'act',
    loadChildren: () => import('@pages/act/act.routes').then(m => m.ActRoutes)
  },
  {
    path: 'edu',
    loadChildren: () => import('@pages/edu/edu.routes').then(m => m.EduRoutes)
  },
  {
    path: 'publish',
    loadChildren: () => import('@pages/publish/publish.routes').then(m => m.PublishRoutes)
  },
  {
    path: 'sponsor',
    loadChildren: () => import('@pages/sponsor/sponsor.routes').then(m => m.SponsorRoutes)
  },
  {
    path: 'member',
    loadChildren: () => import('@pages/member/member.routes').then(m => m.MemberRoutes)
  },
  {
    path: 'contact',
    loadChildren: () => import('@pages/contact/contact.routes').then(m => m.ContactRoutes)
  },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('@pages/error/error.routes').then(m => m.ErrorRoutes)
  },
]
