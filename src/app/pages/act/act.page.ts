import { Component, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'act-page',
  standalone: true,
  imports: [Devicon, Logo],
  template: `
  <div class="mb-4 dark:text-white">
      {{routerUrl}}
  </div>
  <div>
  <!-- <h1 class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">Uses</h1> -->
  <div class="flex flex-col gap-7">
  <h1 class="text-2xl font-semibold dark:text-white">圖學年會</h1>
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
      class="grid grid-cols-2 sm:grid-cols-3 dark:text-gray-200 text-gray-900 text-center border-y border-gray-500"
    >
      <!-- <p class="border-x border-gray-500 p-4  font-normal">Inter Regular</p> -->
      <!-- <p class="border-r border-gray-500 p-4 font-semibold">Inter Semibold</p> -->
      <!-- <p class="border-r border-gray-500 p-4 font-bold">Inter Bold</p> -->
      <p class="border border-gray-500 p-4 font-semibold">YEAR</p>
      <p class="border border-gray-500 p-4 font-semibold">EVENT</p>
      <p class="border border-gray-500 p-4 font-semibold">PLACE</p>
       @for(i of inter; track $index){
        <p class="border border-gray-500 p-4 font-extrabold">{{i.year}}</p>
        <p class="border border-gray-500 p-4 font-extrabold"><a [href]="i.event_link" class="hover:underline" target="_blank">{{i.event}}</a></p>
        <p class="border border-gray-500 p-4 font-extrabold"><a [href]="i.place_link" class="hover:underline" target="_blank">{{i.place_1}}</a>, {{i.place_2}}</p>
       }
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
  </div>`,
})
export class ActPage {
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
  public inter = [
    {
      year: '2024',
      event: 'Computer Graphics Workshop 2024',
      place_1: 'National Taiwan University',
      place_2: 'Taipei, Taiwan',
      event_link: 'https://sites.google.com/csie.ntu.edu.tw/cgw2024/',
      place_link: 'https://www.ntu.edu.tw/'
    },
    {
      year: '2023',
      event: 'Computer Graphics Workshop 2023',
      place_1: 'National Chin-Yi University of Tech.',
      place_2: 'Taichung, Taiwan',
      event_link: 'https://sites.google.com/gm.ncut.edu.tw/cgw-2023',
      place_link: 'https://www.ncut.edu.tw/'
    },
    {
      year: '2022',
      event: 'Computer Graphics Workshop 2022',
      place_1: 'National Taiwan Normal University',
      place_2: 'Taipei, Taiwan',
      event_link: 'https://sites.google.com/gapps.ntnu.edu.tw/cgw2022',
      place_link: 'https://www.ntnu.edu.tw/'
    },
    {
      year: '2021',
      event: 'Computer Graphics Workshop 2021',
      place_1: 'National Taiwan Ocean University',
      place_2: 'Keelung, Taiwan',
      event_link: 'https://cgw2021.cse.ntou.edu.tw/',
      place_link: 'https://www.ntou.edu.tw/'
    },
    {
      year: '2020',
      event: 'Computer Graphics Workshop 2020',
      place_1: 'National Chiao Tung University',
      place_2: 'Hsinchu, Taiwan',
      event_link: 'https://cgw2020.cs.nctu.edu.tw',
      place_link: 'https://www.nctu.edu.tw/'
    },
    {
      year: '2019',
      event: 'Computer Graphics Workshop 2019',
      place_1: 'Yuan Ze University',
      place_2: 'Chung-Li, Taiwan',
      event_link: 'http://cgw2019.yzu.edu.tw/',
      place_link: 'https://www.yzu.edu.tw/'
    },
    {
      year: '2018',
      event: 'Computer Graphics Workshop 2018',
      place_1: 'National Cheng Kung University',
      place_2: 'Tainan, Taiwan',
      event_link: 'http://cgw2018.csie.ncku.edu.tw/',
      place_link: 'https://www.ncku.edu.tw'
    },
    {
      year: '2017',
      event: 'Computer Graphics Workshop 2017',
      place_1: 'Providence University',
      place_2: 'Taichung, Taiwan',
      event_link: 'http://cgw2017.cs.pu.edu.tw/',
      place_link: 'http://enpu.pu.edu.tw/'
    },
    {
      year: '2016',
      event: 'Computer Graphics Workshop 2016',
      place_1: 'Natl. Taiwan Univ. of Scie. and Tech.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://game.csie.ntust.edu.tw/cgw2016/',
      place_link: 'http://www.ntust.edu.tw/home.php'
    },
    {
      year: '2015',
      event: 'Computer Graphics Workshop 2015',
      place_1: 'Natl. Taipei Univ.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://cgw2015.ntpu.edu.tw/index/',
      place_link: 'http://www.ntpu.edu.tw/'
    },
    {
      year: '2014',
      event: 'Computer Graphics Workshop 2014',
      place_1: 'Natl. Taipei Univ. of Tech.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://csie.ntut.edu.tw/csie/cgw2014/',
      place_link: 'http://www.ntut.edu.tw/'
    },
    {
      year: '2013',
      event: 'Computer Graphics Workshop 2013',
      place_1: 'Natl. Tsing Hua Univ.',
      place_2: 'Hsinchu, Taiwan',
      event_link: 'http://cgv.cs.nthu.edu.tw/cgw2013/',
      place_link: 'http://www.nthu.edu.tw/'
    },
    {
      year: '2012',
      event: 'Computer Graphics Workshop 2012',
      place_1: 'Natl. Chi-Nan Univ.',
      place_2: 'Puli, Nantou, Taiwan',
      event_link: 'http://cgw2012.csie.ncnu.edu.tw/',
      place_link: 'http://www.ncnu.edu.tw/'
    },
    {
      year: '2011',
      event: 'Computer Graphics Workshop 2011',
      place_1: 'Natl. Taiwan Univ. of Sc. & Tech.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://graphics.csie.ntust.edu.tw/cgw2011/',
      place_link: 'http://www.ntust.edu.tw/'
    },
    {
      year: '2010',
      event: 'Computer Graphics Workshop 2010',
      place_1: 'Natl. Chiao Tung Univ.',
      place_2: 'Hsinchu, Taiwan',
      event_link: 'http://cgw2010.cs.nctu.edu.tw/',
      place_link: 'http://www.nctu.edu.tw/'
    },
    {
      year: '2009',
      event: 'Computer Graphics Workshop 2009',
      place_1: 'Natl. Chengchi Univ.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://cgw2009.cs.nccu.edu.tw/',
      place_link: 'http://www.nccu.edu.tw/'
    },
    {
      year: '2008',
      event: 'Computer Graphics Workshop 2008',
      place_1: 'Natl. Chiayi Univ.',
      place_2: 'Chiayi, Taiwan',
      event_link: 'http://cgw2008.csie.ncyu.edu.tw/',
      place_link: 'http://www.ncyu.edu.tw/'
    },
    {
      year: '2007',
      event: 'Computer Graphics Workshop 2007',
      place_1: 'Natl. Sun Yat-Sen Univ.',
      place_2: 'Kaohsiung, Taiwan',
      event_link: 'http://ciis.cse.nsysu.edu.tw/',
      place_link: 'http://www.nsysu.edu.tw/'
    },
    {
      year: '2006',
      event: 'Computer Graphics Workshop 2006',
      place_1: 'Soochow Univ.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://www.cis.scu.edu.tw/%7Ecgw/CGW2006/',
      place_link: 'http://www.scu.edu.tw/'
    },
    {
      year: '2005',
      event: 'Computer Graphics Workshop 2005',
      place_1: 'Natl. Taiwan Univ.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://graphics.im.ntu.edu.tw/cgw2005/',
      place_link: 'http://www.ntu.edu.tw/'
    },
    {
      year: '2004',
      event: 'Computer Graphics Workshop 2004',
      place_1: 'Natl. Tsing Hua Univ.',
      place_2: 'Hsinchu, Taiwan',
      event_link: 'http://ibr.cs.nthu.edu.tw/cgw2004/',
      place_link: 'http://www.nthu.edu.tw/'
    },
    {
      year: '2003',
      event: 'Computer Graphics Workshop 2003',
      place_1: 'Natl. Dong Hwa Univ.',
      place_2: 'Hualien, Taiwan',
      event_link: 'http://www.game.csie.ndhu.edu.tw/%7ECG2003/',
      place_link: 'http://www.ndhu.edu.tw/'
    },
    {
      year: '2002',
      event: 'Computer Graphics Workshop 2002',
      place_1: 'Natl. Cheng Kung Univ.',
      place_2: 'Tainan, Taiwan',
      event_link: '',
      place_link: 'http://www.ncku.edu.tw/'
    }
  ]
  public github = github;
}
