import { Component, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

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
  <!-- <h2 class="text-2xl font-semibold dark:text-white">組織架構</h2>
  <p class="mb-4 text-xl text-gray-900 dark:text-white inline-block">Expertise Area</p>
  <div class="max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start group" spot-light>
        @for (o of organization; track $index) {
        <div
          class="border border-gray-200 dark:border-gray-700  relative h-full dark:bg-slate-800 bg-white rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-primary before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100  before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:blur-[100px] overflow-hidden">
          <div class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] overflow-hidden">
            <div
              class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div class="absolute inset-0  dark:bg-slate-800 bg-white rounded-full blur-[80px] translate-z-0"></div>
            </div>
            <div class="flex flex-col gap-3 text-center">
              <icon [path]="s.icon" [size]="50" class="mx-auto"/>
              <img src="./assets/image/cat111.jpg" [width]="120" [height]="120" class="mx-auto" alt="description"/>
              <span class="text-xl font-semibold dark:text-white">{{o.gen}}</span>
              <span class="text-gray-800 dark:text-gray-300">{{o.period}}</span>
            </div>
          </div>
        </div>
      }
    </div> -->
    <!-- <h2 class="text-xl font-bold dark:text-white">Tech Stack:</h2>
    <p class="dark:text-white text-black">
      This website is created with Angular and Tailwind CSS. It's hosted on AWS
      S3, and if you're curious, feel free to explore the source code on
      <a class="underline" href="https://github.com/marckevinflores/kevinflor.es" target="_blank"
        >GitHub</a
      >.
    </p>
    <ul class="flex flex-row py-5 gap-5">
      <li class="pr-5">
        <devicon name="Angular" cssClass="w-12 h-12"/>
      </li>
      <li class="pr-5">
        <devicon name="Tailwind CSS" cssClass="w-12 h-12"/>
      </li>
    </ul>
    <h2 class="text-xl font-bold dark:text-white">Typography:</h2>
    <p class="dark:text-white text-black">For now, I've chosen <a href="https://fonts.google.com/specimen/Inter?query=inter" class="underline" target="_blank" aria-label="Font Style">Inter</a>, a typeface commonly utilized by web designers.</p> -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 dark:text-gray-200 text-gray-900 text-center"
    >
      <!-- <p class="border-x border-gray-500 p-4  font-normal">Inter Regular</p> -->
      <!-- <p class="border-r border-gray-500 p-4 font-semibold">Inter Semibold</p> -->
      <!-- <p class="border-r border-gray-500 p-4 font-bold">Inter Bold</p> -->
      <!-- <p class="border border-gray-500 p-4 font-semibold">YEAR</p>
      <p class="border border-gray-500 p-4 font-semibold">EVENT</p>
      <p class="border border-gray-500 p-4 font-semibold">PLACE</p> -->
       <!-- @for(o of organization; track $index){
        <p class="border border-gray-500 p-4 font-extrabold">{{o.gen}}</p>
        @for(m of o.members; track $index){
          <p class="border border-gray-500 p-4 font-extrabold">{{m.position}}</p>
          @for(g of m.group; track $index){
            <p class="border border-gray-500 p-4 font-extrabold">{{g.name}}</p>
          }
        }
       } -->
    </div>
    <!-- <h2 class="text-xl font-bold dark:text-white">Colors:</h2>
    <p class="dark:text-white text-black">I chose this color palette, drawing inspiration from various websites to create the design.
    </p>
    <div class="grid grid-cols-5 sm:grid-cols-10 text-center select-none">
      <p class="bg-primary-50 p-4 text-black">50</p>
      <p class="bg-primary-100 p-4 text-black">100</p>
      <p class="bg-primary-200 p-4 text-black">200</p>
      <p class="bg-primary-300 p-4 text-black">300</p>
      <p class="bg-primary-400 p-4 text-black">400</p>
      <p class="bg-primary-500 p-4 text-white">500</p>
      <p class="bg-primary-600 p-4  text-white">600</p>
      <p class="bg-primary-700 p-4 text-white">700</p>
      <p class="bg-primary-800 p-4 text-white">800</p>
      <p class="bg-primary-900 p-4 text-white">900</p>
    </div>

    <h2 class="text-xl font-bold dark:text-white">Logo:</h2>
    <p class="text-black dark:text-white">
    I designed the logo myself, incorporating the first letters of my full name M, K, and F to create a concise design. The inspiration struck me during a Google search.
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 items-center place-items-center"
    >
      <div
        class="flex flex-col items-center justify-center p-6 w-full border border-gray-500 text-center bg-white dark:bg-transparent"
      >
        <logo class="dark:text-white text-black"/>
      </div>
      <div
        class="flex flex-col items-center justify-center p-6 w-full border dark:border-white border-black text-center bg-gray-900 dark:bg-white"
      >
        <logo class="dark:text-black text-white"/>
      </div>
    </div>
    <h2 class="text-xl font-bold dark:text-white">Intro Image:</h2>
    <p class="text-black dark:text-white">I just found it here on <a class="underline" target="_blank" href="https://storyset.com/illustration/before-dawn/pana#utm_source=freepik&utm_medium=referall&utm_campaign=storiesdetail&utm_content=edit-button&utm_term=edit">storyset.com</a></p> -->
  </div>
  <!-- @for(o of organization; track $index){
        <p>{{o.gen}} ({{o.period}})</p>
        @for(m of o.members; track $index){
          {{m.position}}
          @for(g of m.group; track $index){
            <a [href]="g.link" class="hover:underline" target="_blank">{{g.name}}</a>
          }
          <p></p>
        }
      } -->
  <!-- @for(o of organization; track $index) {
    <h2 class="text-xl font-bold mb-2">
      {{o.gen}} ({{o.period}})
    </h2>
    @for(m of o.members; track $index) {
      <p class="mb-1">
        <span class="font-semibold">
          {{m.position}}
        </span>
        ：
        @for(g of m.group; track $index) {
          <a [href]="g.link" target="_blank" class="text-blue-600 hover:underline">
            {{g.name}}
          </a>
          @if(g !== m.group[m.group.length - 1]) {
            、
          }
        }
      </p>
    }
  } -->
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
              <img [src]="g.image" [width]="120" [height]="120" class="mx-auto" alt="description"/>
              <span class="text-xl font-semibold dark:text-white"><a [href]="g.link" class="hover:underline" target="_blank">{{g.name}}</a></span>
              <span class="text-gray-800 dark:text-gray-300">click the name</span>
            </div>
          </div>
        </div>
        }
      </div>
    }
  }
  </div>`,
})
export class StructurePage {
  metaService = inject(MetaService)
  routerUrl=""
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
  public organization = [
    {
      gen: '第七屆',
      period: '2023/08~2025/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: './assets/image/cat111.jpg'
            }
          ]
        },
        {
          position: '副理事長',
          group: [
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'https://cgm.cs.ntust.edu.tw/Activity/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '王昱舜',
              link: 'https://people.cs.nctu.edu.tw/~yushuen/',
              image: ''
            },
            {
              name: '朱宏國',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu/',
              image: ''
            },
            {
              name: '紀明德',
              link: 'http://www.cs.nccu.edu.tw/~mtchi/indexc.htm',
              image: ''
            },
            {
              name: '胡敏君',
              link: 'http://mislab.csie.ncku.edu.tw/',
              image: ''
            },
            {
              name: '陳履恆',
              link: 'https://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            },
            {
              name: '林奕成',
              link: 'https://people.cs.nctu.edu.tw/~ichenlin/',
              image: ''
            }
          ]
        },
        {
          position: '名譽理事長',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '林文杰',
              link: 'http://gpl.cs.nctu.edu.tw/Steve-Lin/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '王科植',
              link: 'https://sites.google.com/view/kochihwang/home',
              image: ''
            }
          ]
        },
        {
          position: '活動委員會',
          group: [
            {
              name: '陳炳宇（召集人）',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            },
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '林文杰',
              link: 'http://gpl.cs.nctu.edu.tw/Steve-Lin/',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'https://cgm.cs.ntust.edu.tw/Activity/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '學術委員會',
          group: [
            {
              name: '莊永裕（召集人）',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '莊榮宏',
              link: '',
              image: ''
            },
            {
              name: '李蔡彥',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '網站委員會',
          group: [
            {
              name: '朱宏國（召集人）',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu/',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '紀明德',
              link: 'http://www.cs.nccu.edu.tw/~mtchi/indexc.htm',
              image: ''
            }
          ]
        },
        {
          position: '會員委員會',
          group: [
            {
              name: '蔡侑庭（召集人）',
              link: '',
              image: ''
            },
            {
              name: '謝東儒',
              link: '',
              image: ''
            },
            {
              name: '王昱舜',
              link: 'https://people.cs.nctu.edu.tw/~yushuen/',
              image: ''
            }
          ]
        },
        {
          position: '公關委員會',
          group: [
            {
              name: '陳履恆（召集人）',
              link: 'https://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            },
            {
              name: '陳寶宏',
              link: '',
              image: ''
            },
            {
              name: '胡敏君',
              link: 'http://mislab.csie.ncku.edu.tw/',
              image: ''
            }
          ]
        }
      ]
    },
    {
      gen: '第六屆',
      period: '2021/08~2023/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            }
          ]
        },
        {
          position: '副理事長',
          group: [
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '陳履恆',
              link: 'http://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '朱宏國',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '紀明德',
              link: 'https://www.cs.nccu.edu.tw/%7Emtchi/',
              image: ''
            },
            {
              name: '胡敏君',
              link: 'http://mislab.cs.nthu.edu.tw/',
              image: ''
            },
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '陳寶宏',
              link: '',
              image: ''
            },
            {
              name: '蔡侑庭',
              link: 'http://www.cg.cse.yzu.edu.tw/faculty.html',
              image: ''
            }
          ]
        },
        {
          position: '名譽理事長',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '李蔡彥',
              link: 'https://www4.nccu.edu.tw/~tyli/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '林奕成',
              link: 'http://www.cs.nctu.edu.tw/%7Eichenlin',
              image: ''
            }
          ]
        },
        {
          position: '學會秘書',
          group: [
            {
              name: '賴紫晴',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '活動委員會',
          group: [
            {
              name: '陳炳宇（召集人）',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            },
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'https://cgm.cs.ntust.edu.tw/Activity/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '學術委員會',
          group: [
            {
              name: '莊永裕（召集人）',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '莊榮宏',
              link: 'https://cggmwww.cs.nctu.edu.tw/index.php/members?view=article&id=20&catid=9',
              image: ''
            },
            {
              name: '李蔡彥',
              link: 'https://www4.nccu.edu.tw/~tyli/',
              image: ''
            }
          ]
        },
        {
          position: '網站委員會',
          group: [
            {
              name: '朱宏國（召集人）',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '紀明德',
              link: 'https://www.cs.nccu.edu.tw/%7Emtchi/',
              image: ''
            }
          ]
        },
        {
          position: '會員委員會',
          group: [
            {
              name: '蔡侑庭（召集人）',
              link: 'http://www.cg.cse.yzu.edu.tw/faculty.html',
              image: ''
            },
            {
              name: '謝東儒',
              link: 'https://myweb.ntut.edu.tw/~tjhsieh/',
              image: ''
            },
            {
              name: '王昱舜',
              link: 'https://people.cs.nctu.edu.tw/~yushuen/',
              image: ''
            }
          ]
        },
        {
          position: '公關委員會',
          group: [
            {
              name: '陳履恆（召集人）',
              link: 'http://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            },
            {
              name: '陳寶宏',
              link: '',
              image: ''
            },
            {
              name: '胡敏君',
              link: 'http://mislab.cs.nthu.edu.tw/',
              image: ''
            }
          ]
        }
      ]
    },
    {
      gen: '第五屆',
      period: '2019/08~2021/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            }
          ]
        },
        {
          position: '副理事長',
          group: [
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            },
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '王昱舜',
              link: 'http://people.cs.nctu.edu.tw/%7Eyushuen/',
              image: ''
            },
            {
              name: '朱宏國',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '陳履恆',
              link: 'http://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            },
            {
              name: '胡敏君',
              link: 'http://mislab.csie.ncku.edu.tw/',
              image: ''
            }
          ]
        },
        {
          position: '名譽理事長',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '名譽理事',
          group: [
            {
              name: '陳寶宏',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '紀明德',
              link: 'https://www.cs.nccu.edu.tw/%7Emtchi/',
              image: ''
            }
          ]
        },
        {
          position: '活動委員會',
          group: [
            {
              name: '王銓彰（召集人）',
              link: '',
              image: ''
            },
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            },
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '學術委員會',
          group: [
            {
              name: '莊榮宏（召集人）',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            },
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            },
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '李同益（候補監事）',
              link: 'http://graphics.csie.ncku.edu.tw/Tony/tony.htm',
              image: ''
            }
          ]
        },
        {
          position: '網站委員會',
          group: [
            {
              name: '朱宏國（召集人）',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            }
          ]
        },
        {
          position: '會員委員會',
          group: [
            {
              name: '王昱舜（召集人）',
              link: 'http://people.cs.nctu.edu.tw/%7Eyushuen/',
              image: ''
            },
            {
              name: '李蔡彥',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            },
            {
              name: '蔡侑庭（候補理事）',
              link: 'http://www.cg.cse.yzu.edu.tw/faculty.html',
              image: ''
            }
          ]
        },
        {
          position: '公關委員會',
          group: [
            {
              name: '陳履恆（召集人）',
              link: 'http://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            },
            {
              name: '胡敏君',
              link: 'http://mislab.csie.ncku.edu.tw/',
              image: ''
            },
            {
              name: '陳寶宏（名譽理事）',
              link: '',
              image: ''
            }
          ]
        }
      ]
    },
    {
      gen: '第四屆',
      period: '2017/08~2019/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '副理事長',
          group: [
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            },
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '朱宏國',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '李宗南',
              link: 'http://edith.cse.nsysu.edu.tw/CNLee.htm',
              image: ''
            },
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            },
            {
              name: '林昭宏',
              link: 'http://dgl.geomatics.ncku.edu.tw/',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '張銘光',
              link: '',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '林文杰',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '活動委員會',
          group: [
            {
              name: '王銓彰（召集人）',
              link: '',
              image: ''
            },
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '學術委員會',
          group: [
            {
              name: '莊榮宏（召集人）',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            },
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            },
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '李同益（候補監事）',
              link: 'http://graphics.csie.ncku.edu.tw/Tony/tony.htm',
              image: ''
            }
          ]
        },
        {
          position: '網站委員會',
          group: [
            {
              name: '朱宏國（召集人）',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            }
          ]
        },
        {
          position: '會員委員會',
          group: [
            {
              name: '王昱舜（召集人）',
              link: 'http://people.cs.nctu.edu.tw/%7Eyushuen/',
              image: ''
            },
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            },
            {
              name: '張銘光',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '公關委員會',
          group: [
            {
              name: '陳履恆（召集人）',
              link: 'http://cgda.csie.ncnu.edu.tw/cglab/membersweb/lhchen/index.htm',
              image: ''
            },
            {
              name: '李宗南',
              link: 'http://edith.cse.nsysu.edu.tw/CNLee.htm',
              image: ''
            },
            {
              name: '林昭宏',
              link: 'http://dgl.geomatics.ncku.edu.tw/',
              image: ''
            },
            {
              name: '王浩全（候補理事）',
              link: 'http://www.haochuanwang.info/',
              image: ''
            }
          ]
        }
      ]
    },
    {
      gen: '第三屆',
      period: '2015/08~2017/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '副理事長',
          group: [
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            },
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '朱宏國',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '李宗南',
              link: 'http://edith.cse.nsysu.edu.tw/CNLee.htm',
              image: ''
            },
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            },
            {
              name: '林昭宏',
              link: 'http://dgl.geomatics.ncku.edu.tw/',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '張銘光',
              link: '',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '林文杰',
              link: '',
              image: ''
            }
          ]
        }
      ]
    },
    {
      gen: '第二屆',
      period: '2013/08~2015/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '副理事長',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '李宗南',
              link: 'http://edith.cse.nsysu.edu.tw/CNLee.htm',
              image: ''
            },
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '朱宏國',
              link: 'http://cgv.cs.nthu.edu.tw/hkchu',
              image: ''
            },
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            },
            {
              name: '林昭宏',
              link: 'http://dgl.geomatics.ncku.edu.tw/',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '莊永裕',
              link: 'http://www.csie.ntu.edu.tw/%7Ecyy/',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            },
            {
              name: '張銘光',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        }
      ]
    },
    {
      gen: '第一屆',
      period: '2011/08~2013/07',
      members:[
        {
          position: '理事長',
          group: [
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '常務理事',
          group: [
            {
              name: '王銓彰',
              link: '',
              image: ''
            },
            {
              name: '李同益',
              link: 'http://graphics.csie.ncku.edu.tw/Tony/tony.htm',
              image: ''
            },
            {
              name: '歐陽明',
              link: 'http://www.cmlab.csie.ntu.edu.tw/%7Eming/',
              image: ''
            }
          ]
        },
        {
          position: '理事',
          group: [
            {
              name: '林文杰',
              link: 'http://www.cs.nctu.edu.tw/%7Ewclin',
              image: ''
            },
            {
              name: '張鈞法',
              link: 'http://cchang.wordpress.com/',
              image: ''
            },
            {
              name: '陳維超',
              link: '',
              image: ''
            },
            {
              name: '黃科森',
              link: '',
              image: ''
            },
            {
              name: '楊傳凱',
              link: 'http://cgm.cs.ntust.edu.tw/lab/director.html',
              image: ''
            },
            {
              name: '李宗南',
              link: 'http://edith.cse.nsysu.edu.tw/CNLee.htm',
              image: ''
            }
          ]
        },
        {
          position: '名譽理事長',
          group: [
            {
              name: '楊熙年',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '常務監事',
          group: [
            {
              name: '莊榮宏',
              link: 'http://cggmwww.csie.nctu.edu.tw/jhchuang/',
              image: ''
            }
          ]
        },
        {
          position: '監事',
          group: [
            {
              name: '李蔡彥',
              link: 'http://www3.nccu.edu.tw/%7Eli/',
              image: ''
            },
            {
              name: '張銘光',
              link: '',
              image: ''
            }
          ]
        },
        {
          position: '秘書長',
          group: [
            {
              name: '陳炳宇',
              link: 'http://graphics.csie.ntu.edu.tw/%7Erobin/',
              image: ''
            }
          ]
        }
      ]
    }
  ]
  public github = github;
}
