import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectLink } from '@pages/project/components/project-link'
import { FeatureProject } from '@pages/project/components/feature-project'
import { OtherProject } from '@pages/project/components/other-project'
@Component({
  selector: 'project-page',
  imports: [PlatformTag, Devicon, ProjectLink, FeatureProject, OtherProject],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
    <div class="mb-4 dark:text-white">
      {{routerUrl}}
    </div>
    <h1
      class="text-brand-primary mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      {{pageTitle}}
    </h1>
    <!-- <feature-project/> -->
    <h1
      class="text-brand-primary text-center text-3xl font-semibold tracking-tight lg:text-2xl lg:leading-snug dark:text-white">
      {{content}}
    </h1>
    <!-- <other-project/> -->
`
})
export class ProjectPage {
  projectService = inject(ProjectService);
  metaService = inject(MetaService);
  pageTitle=""
  content="Content"
  routerUrl=""
  constructor() {
    this.routerUrl = this.metaService.routerUrl
    this.metaService.setMetaTags(
      `${this.routerUrl} - ${profileData.name}`,
      `Projects made by ${profileData.name}. Get to know all the sources.`,
      [
        'tech',
        'software',
        'development',
        'project',
        'portfolio',
        'app',
        'programming',
        'open-source',
        'web',
        'android',
        'ios'
      ]
    )
    this.pageTitle = this.metaService.contentName
    if(this.pageTitle == "繳納會費"){
      this.content ="給我繳費! (╯‵□′)╯︵┴─┴"
    }
  }


}
