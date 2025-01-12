import { Component, inject, OnInit } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';
import { OrganizationService } from './structure.service';
import { Organization } from '@data/schema/organization.schema';

@Component({
  selector: 'structure-page',
  standalone: true,
  imports: [Devicon, Logo],
  template: `
  <div class="mb-4 dark:text-white">
      {{routerUrl}}
  </div>
  <div class="dark:text-white">
  <!-- <h1 class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">Uses</h1> -->
  <div class="flex flex-col gap-7">
  <h1 class="text-2xl font-semibold dark:text-white">組織架構</h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 dark:text-gray-200 text-gray-900 text-center"
    >
    </div>
  </div>
  @for(o of filteredOrg; track $index) {
    @if($index === 0) {
      <h2 class="text-2xl font-semibold dark:text-white">{{o.gen}} ({{o.period}})</h2>
    } @else {
      <h2 class="mt-20 text-2xl font-semibold dark:text-white">{{o.gen}} ({{o.period}})</h2>
    }
    @for(m of o.members; track $index) {
      <p class="mt-6 mb-4 text-xl text-gray-900 dark:text-white inline-block">{{m.position}}</p>
      <div class="max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start group" spot-light>
        @for(g of m.group; track $index) {
          <div
          class="border border-gray-200 dark:border-gray-700  relative h-full dark:bg-slate-800 bg-white rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-primary before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100  before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:blur-[100px] overflow-hidden">
          <div class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] overflow-hidden">
            <div
              class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div class="absolute inset-0  dark:bg-slate-800 bg-white rounded-full blur-[80px] translate-z-0"></div>
            </div>
            <div class="flex flex-col gap-3 text-center">
              <!-- <img [src]="g.image" [width]="120" [height]="120" class="mx-auto" alt="description"/> -->
              <img src="./assets/image/cat111.jpg" [width]="120" [height]="120" class="mx-auto" alt="description"/>
              <span class="text-xl font-semibold dark:text-white"><a [href]="g.link" class="hover:underline" target="_blank">{{g.name}}</a></span>
              <span class="text-gray-800 dark:text-gray-300">click the name</span>
            </div>
          </div>
        </div>
        }
      </div>
    }
  }
  </div>
  <!-- <button>Click</button> -->
  
  `,
})
export class StructurePage implements OnInit {
  metaService = inject(MetaService)
  structrureService = inject(OrganizationService)
  routerUrl=""
  organization : Organization[] = []
  constructor(){
    this.routerUrl = this.metaService.routerUrl
    this.metaService.setMetaTags(
      `${this.routerUrl} - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'marc kevin flores',
        'marc kevin',
        'marckevinflores',
        'software engineer',
        'philippines',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }


  public get filteredOrg() {
    if (this.routerUrl === "關於學會 > 組織架構") {
      return this.organization.slice(0, 1);
    } else {
      return this.organization.slice(1);
    }
  }

  ngOnInit(): void {
    // 這裡呼叫 service
    this.structrureService.getOrganizations().subscribe((data: Organization[]) => {
      this.organization = data;

    });
  }
  

  
  public github = github;
}
