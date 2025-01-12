import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ExpertiseArea } from '@pages/home/components/expertise-area/expertise-area';
import { Intro } from '@pages/home/components/intro/intro';
import { LanguageTools } from '@pages/home/components/language-tools/language-tools';
import { InWork } from '@pages/home/components/in-work/in-work';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ExpertiseArea, Intro, LanguageTools, InWork, Loader],
  template: `
    <div class="mb-4 dark:text-white">
      {{routerUrl}}
    </div>
    @defer(on immediate){
      <intro/>
      <!-- <expertise-area/>
      <language-tools/>
      <in-work/> -->
    }@placeholder {
      <loader/>
    }
    <h1 class="text-2xl dark:text-white">News 最新訊息</h1>
    <br>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 dark:text-gray-200 text-gray-900 text-center border-y border-gray-500"
    >
      <p class="border border-gray-500 p-4 font-semibold">DATE</p>
      <p class="border border-gray-500 p-4 font-semibold">EVENT</p>
      <p class="border border-gray-500 p-4 font-semibold">PLACE</p>
       @for(n of news; track $index){
        <p class="border border-gray-500 p-4 font-extrabold">{{n.date}}</p>
        <p class="border border-gray-500 p-4 font-extrabold"><a [href]="n.event_link" class="hover:underline" target="_blank">{{n.event}}</a></p>
        <p class="border border-gray-500 p-4 font-extrabold"><a [href]="n.place_link" class="hover:underline" target="_blank">{{n.place_1}}</a>, {{n.place_2}}</p>
       }
    </div>
  `
})
export class HomePage {
  metaService = inject(MetaService);
  routerUrl=""
  constructor() {
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
  public news = [
    {
      date: '24/07/11-12',
      event: 'Computer Graphics Workshop 2024 (CGW 2024)',
      place_1: 'National Taiwan University',
      place_2: 'Taipei, Taiwan',
      event_link: 'https://sites.google.com/csie.ntu.edu.tw/cgw2024/',
      place_link: 'https://www.ntu.edu.tw/'
    },
    {
      date: '23/07/11-12',
      event: 'Computer Graphics Workshop 2023 (CGW 2023)',
      place_1: 'Natl. Chin-Yi Univ. of Tech.',
      place_2: 'Taichung, Taiwan',
      event_link: 'https://sites.google.com/gm.ncut.edu.tw/cgw-2023',
      place_link: 'https://www.ncut.edu.tw/'
    },
    {
      date: '22/07/19-20',
      event: 'Computer Graphics Workshop 2022 (CGW 2022)',
      place_1: 'National Taiwan Normal University',
      place_2: 'Taipei, Taiwan',
      event_link: 'https://sites.google.com/gapps.ntnu.edu.tw/cgw2022',
      place_link: 'https://www.ntnu.edu.tw/'
    },
    {
      date: '21/07/12-13',
      event: 'Computer Graphics Workshop 2021 (CGW 2021)',
      place_1: 'National Taiwan Ocean University',
      place_2: 'Keelung, Taiwan',
      event_link: 'https://cgw2021.cse.ntou.edu.tw/',
      place_link: 'https://www.ntou.edu.tw/'
    },
    {
      date: '20/07/9-10',
      event: 'Computer Graphics Workshop 2020 (CGW 2020)',
      place_1: 'National Chiao Tung University',
      place_2: 'Hsinchu, Taiwan',
      event_link: 'https://cgw2020.cs.nctu.edu.tw',
      place_link: 'https://www.nctu.edu.tw/'
    },
    {
      date: '19/06/27-28',
      event: 'Computer Graphics Workshop 2019 (CGW 2019)',
      place_1: 'Yuan Ze University',
      place_2: 'Chung-Li, Taiwan',
      event_link: 'http://cgw2019.yzu.edu.tw/',
      place_link: 'https://www.yzu.edu.tw/'
    },
    {
      date: '18/06/29-30',
      event: 'Computer Graphics Workshop 2018 (CGW 2018)',
      place_1: 'National Cheng Kung University',
      place_2: 'Tainan, Taiwan',
      event_link: 'http://cgw2018.csie.ncku.edu.tw/',
      place_link: 'https://www.ncku.edu.tw'
    },
    {
      date: '17/06/29-30',
      event: 'Computer Graphics Workshop 2017 (CGW 2017)',
      place_1: 'Providence University',
      place_2: 'Taichung, Taiwan',
      event_link: 'http://cgw2017.cs.pu.edu.tw/',
      place_link: 'http://enpu.pu.edu.tw/'
    },
    {
      date: '16/07/11-12',
      event: 'Computer Graphics Workshop 2016 (CGW 2016)',
      place_1: 'Natl. Taiwan Univ. of Scie. and Tech.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://game.csie.ntust.edu.tw/cgw2016/',
      place_link: 'http://www.ntust.edu.tw/home.php'
    },
    {
      date: '14/07/10-11',
      event: 'Computer Graphics Workshop 2014 (CGW 2014)',
      place_1: 'Natl. Taipei Univ. of Tech.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://csie.ntut.edu.tw/csie/cgw2014/',
      place_link: 'http://www.ntut.edu.tw/'
    },
    {
      date: '14/08/10-14',
      event: 'ACM SIGGRAPH 2014',
      place_1: 'Vancouver, BC',
      place_2: 'Canada',
      event_link: 'http://www.siggraph.org/s2014/',
      place_link: ''
    },
    {
      date: '14/08/27-29',
      event: 'Smart Graphics 2014',
      place_1: 'Natl. Chengchi Univ.',
      place_2: 'Taipei, Taiwan',
      event_link: 'http://www.smartgraphics.org/sg14/main.html',
      place_link: 'http://www.nccu.edu.tw/'
    },
    {
      date: '14/10/05-08',
      event: 'ACM UIST 2014',
      place_1: 'Honolulu, HI',
      place_2: 'USA',
      event_link: 'http://www.acm.org/uist/uist2014/',
      place_link: ''
    },
    {
      date: '14/10/08-10',
      event: 'Pacific Graphics 2014',
      place_1: 'Ewha Womans Univ.',
      place_2: 'Seoul, Koera',
      event_link: 'http://graphics.ewha.ac.kr/PG14/',
      place_link: 'http://www.ewha.ac.kr/'
    },
    {
      date: '14/12/03-06',
      event: 'ACM SIGGRAPH Asia 2014',
      place_1: 'Shenzhen, Guangdong',
      place_2: 'China',
      event_link: 'http://sa2014.siggraph.org/',
      place_link: ''
    }
  ]
}
