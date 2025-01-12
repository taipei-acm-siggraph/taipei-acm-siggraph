import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  ViewEncapsulation,
  effect,
  computed,
  inject
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '@core/services/dark-mode.service';
import { Logo } from '@shared/components/logo/logo';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import navlinkData from '@data/nav-link.data'
import { Icon } from '@shared/components/icon/icon';
import { moon, sun } from '@icon/regular.icon';
import { ThemeService } from '@core/services/theme.service';
import { paintBucket } from '@icon/solid.icon';
import { ToolbarColor } from '@shared/components/toolbar-color/toolbar-color'

@Component({
  selector: 'navbar',
  imports: [RouterModule, Logo, NgClass, Icon, ToolbarColor, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `<nav
  class="bg-gray-50/75 dark:bg-gray-900/75 fixed w-full z-[2] top-0 start-0 backdrop-blur-lg rounded" [ngClass]="{'h-full':open&&!sizeLarger1024, 'overflow-y-scroll':open&&!sizeLarger1024}">
  <toolbar-color/>
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 border-y border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 ">
    <logo class="dark:text-white text-black"/>
    <h1 class="ml-1 text-base font-semibold dark:text-white" [ngClass]="{ 'hidden': open && !sizeLarger1024}"><a routerLink="/" class="hover:underline">Taipei ACM SIGGRAPH</a></h1>
    <div class="flex lg:order-2 lg:space-x-0">
      <button (click)="darkModeService.toggleDarkMode()" type="button" aria-label="DarkMode"
        class="mx-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <icon [path]="icon()" [size]="20" iconClass="dark:fill-white fill-black"></icon>
      </button>
      <button (click)="themeColor.toggle()" aria-label="Github" class="mx-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <icon [path]="paintBucket" [size]="20" iconClass="dark:fill-white fill-black"></icon>
      </button>
      <button (click)="open = !open" type="button" aria-label="MenuToggle"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <div class="space-y-1.5">
          <div class="w-6 h-0.5 bg-black dark:bg-white transition-all delay-0"
            [ngClass]="{'rotate-45 translate-y-2': open}"></div>
          <div class="w-6 h-0.5 bg-black dark:bg-white transition-all delay-0" [ngClass]="{'opacity-0': open}"></div>
          <div class="w-6 h-0.5 bg-black dark:bg-white transition-all delay-0"
            [ngClass]="{'-rotate-45 -translate-y-2': open}">
          </div>
        </div>
      </button>
    </div>
    <div class="w-full ml-auto lg:w-auto lg:order-1 flex lg:block min-h-96 lg:min-h-0 items-center"
      [ngClass]="{ 'hidden': !open}">
      <ul
        class="text-center w-full flex flex-col p-4 mx-2 lg:p-0 mt-4 font-medium rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 dark:border-gray-700">
        @for (link of links(); track $index) {
        <li class="relative parent">
          <div class="flex justify-between place-items-center">
            <a [routerLink]="link.path" routerLinkActive="text-primary dark:text-primary-400"
              [routerLinkActiveOptions]="{exact: true}" (click)="open = false"
              class=" block py-4 px-3 rounded hover:text-primary dark:hover:text-primary-400 dark:text-gray-100 lg:p-0 dark:border-gray-700">
              <span>{{link.name}}</span>
            </a>
            <svg *ngIf=link.childrens.length (click)="clickTri($index)" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current lg:hidden pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </div>
            <ul *ngIf=this.sizeLarger1024||itemOpen[$index] class="child transition duration-300 lg:absolute top-full right-0 lg:w-48 bg-white lg:shadow-lg lg:rounded-b">
            @for (lc of link.childrens; track $index) {
              <li>
                  <a [routerLink]="lc.path" routerLinkActive="text-primary dark:text-primary-400"
                    [routerLinkActiveOptions]="{exact: true}" (click)="open = false" class="flex px-4 py-3 hover:bg-gray-50">
                    {{lc.name}}
                  </a>
              </li>
            }
            </ul>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>`
})
export class Navbar {
  open: boolean = false;
  paintBucket = paintBucket;
  links = computed(() => navlinkData)
  icon = computed(() => this.darkModeService.isDark() ? sun : moon)
  darkModeService = inject(DarkModeService);
  renderer = inject(Renderer2);
  document: Document = inject(DOCUMENT);
  itemOpen=new Array<boolean>
  itemLen=0
  public themeColor = inject(ThemeService)
  sizeLarger1024 = true

  constructor() {
    effect(() => {
      this.applyDarkModeStyles();
    });
    this.itemLen = this.links().length
    this.checkWindowSize()
  }

  private checkWindowSize():void{
    this.sizeLarger1024 = window.screen.width < 1024 ? false : true
  }

  ngDoCheck(){
    this.checkWindowSize()
  }

  private applyDarkModeStyles() {
    const darkMode = this.darkModeService.isDark();
    const root = this.document.documentElement;
    const favicon = this.document.querySelector("link[rel*='icon']");
    const newFaviconHref = `assets/image/img05.jpg`;
    // const newFaviconHref = `assets/icons/favicon-${darkMode ? 'dark' : 'light'
    //   }.png`;
    this.renderer.setAttribute(favicon, 'href', newFaviconHref);
    root.classList[darkMode ? 'add' : 'remove']('dark');
  }

  public clickTri(ind:number):void{
    if(this.itemOpen[ind] === true) this.itemOpen[ind] = false
    else{
      this.itemOpen = new Array<boolean>(this.itemLen).fill(false)
      this.itemOpen[ind] = true
    }
    
  }
}
