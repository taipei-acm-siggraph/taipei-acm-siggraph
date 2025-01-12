import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';

@Component({
  selector: 'edu',
  template: `
  <div class="mb-4 dark:text-white">
    {{routerUrl}}
  </div>
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
  <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">工作與實習</h1>
      @for(s of sources; track $index){
        <h2 class="text-xl font-semibold dark:text-white">{{s.name}}</h2>
        @for(g of s.group; track $index){
          <span> ‧ <a [href]="g.link" class="hover:underline" target="_blank">{{g.link_name}}</a></span>
        }
      }
  </div>
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch],
  standalone: true
})
export class EduPage{
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)
  routerUrl=""
  constructor(){
    this.routerUrl = this.metaService.routerUrl
    this.metaService.setMetaTags(
      `${this.routerUrl} - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public aboutDetails =  [
    {
      title: 'What I Do',
      desc: `I've worked on a variety of projects, ranging from
      mobile apps and web development to optimizing performance, writing clean code, and emphasizing good design
      principles. I take pride in my attention to detail and commitment to creating efficient, well-designed solutions
      that meet both user needs and industry standards. I'm your go-to person for JavaScript frameworks and ensuring
      the overall quality of software development projects.`
    },
    {
      title: 'Always Learning',
      desc: `I'm always eager to learn new things. Whether
      it's staying updated on the latest technologies or exploring different coding techniques, I enjoy expanding my
      knowledge to grow as a developer.`
    },
    {
      title: 'Off-Duty Fun',
      desc: `During my off-duty hours, I find joy in coding, exploring new aspects of coding, and staying updated by reading
      the latest blogs on technology. I also enjoy playing games on my phone, watching videos, listening to popular
      songs, and taking refreshing walks outside. It's important for me to spend quality time with my family and
      friends.`
    },
    {
      title: 'Why I Code',
      desc: `I code because it allows me to turn ideas into
      reality. It's a creative outlet that lets me build useful and innovative solutions. Coding challenges me to
      solve problems and continuously improve my skills. Ultimately, it's my way of making a positive impact through
      technology.`
    },
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: `Caloocan City, Metro Manila, Philippines`,
      link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7'
    },
    {
      title: 'Mobile Number',
      desc: '+639092884082',
      link: 'tel:+639092884082'
    },
    {
      title: 'Email',
      desc: 'marc@kevinflor.es',
      link: 'mailto:marc@kevinflor.es'
    }
  ]
  public sources = [
    {
      name: '畢業生應徵',
      group:[
        {
          link_name: 'IGS',
          link: 'https://www.104.com.tw/company/asz1lzk?jobsource=freshman2009'
        },
        {
          link_name: 'Xpec',
          link: 'https://www.104.com.tw/company/wjh8xbk?jobsource=checkc'
        },
        {
          link_name: 'Mediatek',
          link: 'https://careers.mediatek.com/eREC/'
        },
        {
          link_name: 'Google Taipei',
          link: 'https://www.google.com/about/careers/applications/locations/'
        },
        {
          link_name: 'ASUS',
          link: 'https://www.asus.com/tw/'
        },
        {
          link_name: 'HTC',
          link: 'https://www.htc.com/tw/'
        }
      ]
    },
    {
      name: '實驗室、廠商徵才',
      group:[]
    },
    {
      name: '學生實習',
      group:[
        {
          link_name: 'Intel-NTU Internship',
          link: 'https://www.cc.ntu.edu.tw/chinese/index.asp'
        }
      ]
    }
  ]
}
