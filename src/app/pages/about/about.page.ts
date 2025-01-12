import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
@Component({
  selector: 'about',
  template: `
  <div class="mb-4 dark:text-white">
    {{routerUrl}}
  </div>
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
  <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">學會簡介</h1>
      <p class="justify-start">資訊科技的發展日新月異，人們對於視覺感知的要求永無止境，因此電腦圖學的研究一直面對新的挑戰與機會。
        毫無疑問，在數位多媒體生活的時代，電腦圖學將扮演很重要的角色。
        隨著軟硬體的快速發展，近年來電腦圖學研究課題也不斷更新；
        不論是已知問題的創新解法或新的研究議題，都有待進一步突破，方能達到建構數位新世界的目標。
        近年來，在計算機圖學學門各位先進及新血的共同努力下，國內電腦圖學的研究蓬勃發展，並在國際學術領域中佔有一席之地。
        2010年夏天，在電腦圖學產學界先進們的促成以及 ACM SIGGRAPH 總會的支持下，社團法人台灣電腦圖學與互動技術學會（Taipei ACM SIGGRAPH）因此成立，並於2011年春天獲准設立。
      </p>
  </div>
  <!-- <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
      <p class="justify-start">I'm Marc Kevin Flores, a software
        engineer with over
        five years of
        experience. I specialize in turning
        ideas into polished software, blending innovation with user-friendly design. 🚀</p>
      <p *ngFor="let a of aboutDetails"><b class="dark:text-white text-black">{{a.title}}</b><br />{{a.desc}}
      </p>
  </div>
  <div class="flex flex-col gap-5">
  <h1 class="text-2xl font-semibold dark:text-white">Activity:</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <music/>
    <watch/>
  </div>
  </div>

<div class="flex flex-col gap-5">
<h1 class="text-2xl font-semibold dark:text-white">Contact Information:</h1>
  @for(c of contactInfo; track $index){
    <p>
      <b class="dark:text-white text-black ">{{c.title}}:</b><br />
      <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
    </p>
  }
</div> -->
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch],
  standalone: true
})
export class AboutPage{
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
    }
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
}
